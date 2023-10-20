import Filters from "@/components/Filters";
import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";

export default function Page(){
    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
            <section className="nav-padding w-full">
                <div className="flex-center relative min-h-[274px] w-full flex-col bg-banner bg-cover text-center">
                    <h1 className="sm:heading-1 heading2 mb-6 text-center text-gradient_blue-purple">JavaScript Mastery Resources</h1>
                </div>
                <SearchForm />
            </section>
            <Filters />
        </main>
    )
}