
"use client"
import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const LoginModal = () => {

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }

        loginModal.onClose();
        registerModal.onOpen();
    }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback(async()=> {
        try{
            setIsLoading(true);

            // ADD LOGIN AUTH here
            loginModal.onClose();
        } 
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false); 
        }
    }, [loginModal]);

    // add loginModal dependency in [] above

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading} 
                
            />
            <Input
                placeholder= "Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading} 
            />
        </div>
    )
    
    const footerContent = (
        <div 
            className="
                text-neutral-40 
                text-center 
                mt-4">
            <p> New to Stonks? {` `}
                <span 
                    onClick={onToggle}
                    className="
                        text-black
                        cursor-pointer
                        hover:underline">
                     Register
                </span>
            </p>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign In"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body ={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;