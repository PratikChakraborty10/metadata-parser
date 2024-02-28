import type { Metadata } from "next";
import Sidebar from "@/components/sidebar"

export const metadata: Metadata = {
    title: "Content Data Parser",
    description: "An application to preview all the valid meta data",
};

const ContentLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    const apiLimitCount = 0;
    const isPro = false;
    return(
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 bg-gray-900">
            <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
            </div>
            <main className="md:pl-72">
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default ContentLayout;