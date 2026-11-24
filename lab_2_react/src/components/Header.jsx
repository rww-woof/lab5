function Header() {
    return (
        <header className="md:p-12 border-b-2 border-[#4584d6]">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Азанова Софія Андріївна</h1>
            <h2 className="text-lg mb-4 italic">Студентка кафедри кібербезпеки та захисту інформації</h2>

            <h3 className="font-bold text-xl mb-2">Контактна інформація</h3>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
                <p>Email: <a href="mailto:azanova.sofia638@gmail.com" className="hover:underline">azanova.sofia638@gmail.com</a></p>
                <p>Телефон: <a href="tel:+380982708885" className="hover:underline">+380982708885</a></p>
            </div>
        </header>
    );
}
export default Header;