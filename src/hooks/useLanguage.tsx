import React, { createContext, useState, useContext, ReactNode } from "react";

type LanguageContextType = {
    language: "EN" | "PA";
    setLanguage: React.Dispatch<React.SetStateAction<"EN" | "PA">>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<"EN" | "PA">("EN");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};