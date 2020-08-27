import Head from 'next/head'

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>Track Earning & Expense -- just another MERN app</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Head>
            {/* The Main Body */}
            <section className="main">
                {props.children}
            </section>
        </>
    );
}

export default Layout;