
export default function Info() {
    return (
        <section className="flex flex-col items-center gap-2">
            <img src="/portrait.png" alt="portrait" className=""/>
            <h1 className="text-white text-[1.56rem]">Eva</h1>
            <h2 className="text-subheading text-[0.8rem]">Test Subject</h2>
            <a href="https://de.wikipedia.org/wiki/Ex_Machina_(Film)" className="text-paragraph-text">eva.website</a>
            <div className="flex justify-between w-full px-6">
                <button className="text-[0.9rem] bg-white text-gray-700 flex items-center gap-2 px-8 py-2 rounded-md">
                    <img src="/icon-mail.svg" alt="mail-icon" />
                    Email
                    </button>
                <button className="text-[0.9rem] bg-button-blue text-white flex items-center gap-2 px-8 py-2 rounded-md">
                    <img src="/icon-linkedIn.svg" alt="linkedin-icon" />
                    LinkedIn
                </button>
            </div>
        </section>
    )
}