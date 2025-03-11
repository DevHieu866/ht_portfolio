'use client'
import React from 'react'
import toast from 'react-hot-toast';

const ContactForm = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        
        // Define a more specific type instead of `any`
        const data: { [key: string]: string } = {}; 
        
        formData.forEach((value, key) => {
            data[key] = value.toString(); // Ensure all values are strings
        });

        data["access_key"] = "3b483299-694e-4df1-ab4c-6fccbb8db389";

        console.log("Sending JSON:", JSON.stringify(data));

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log("Response:", result);

            if (result.success) {
                toast.success("Message Received.");
            } else {
                toast.error("Error: " + result.message);
            }
        } catch (error) {
            console.error("Request failed:", error);
            toast.error("Network error. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 mt-10">
            <input 
                type="text" 
                id="name" 
                name="name" 
                className="flex w-[300px] md:w-[400px] h-[50px] p-4 rounded-xl border-rc border-2" 
                placeholder="Name" 
                required
            />
            <input 
                type="email" 
                id="email" 
                name="email" 
                className="flex w-[300px] md:w-[400px] h-[50px] p-4 rounded-xl border-rc border-2" 
                placeholder="Email" 
                required
            />
            <textarea 
                name="message" 
                id="message" 
                className="flex p-4 w-[300px] md:w-[400px] min-h-[200px] rounded-xl border-rc border-2 resize-none" 
                placeholder="Message" 
                required
            />
            <div className="flex w-full justify-start">
                <button 
                    type="submit" 
                    className="p-2 bg-rc/90 hover:bg-green-400 w-[150px] rounded-xl justify-items-start"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ContactForm;
