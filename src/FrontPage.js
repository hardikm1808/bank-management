import React from 'react'
import logom from './bank-building_23-2147510895.avif'
import { useNavigate } from 'react-router-dom'


export default function FrontPage() {

    const Navigate = useNavigate()

    const goLogin = () => {
        Navigate('ManagerLogin')
    }
    const userlogin = () => {
        Navigate('customerlogin')
    }

    return (
        <>

            <>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <nav
                    className="navbar navbar-expand-lg navbar-dark "
                    style={{ backgroundColor: "#006d77" }}
                >
                    <div className="container-fluid">
                        <div className='navname'>
                            <a className="navbar-brand fw-bold" href="/">
                                <img src={logom} alt="" height={80} width={80} className='logom' />
                            </a>
                            <h1 className='name'>Mor & Mor Bank</h1>
                        </div>
                        <div className='d-flex'>
                            <div className='me-2'>
                                <button className='btn btn-info' onClick={() => goLogin()}>Login</button>
                            </div>
                            <div>
                                <button className='btn btn-info' onClick={() => userlogin()}>User Login</button>
                            </div>
                        </div>

                    </div>
                </nav>
                <div className="hero-section">
                    <div className="hero container">
                        <div className="hero-bg">
                            <picture className="picture">
                                <source
                                    media="(max-width: 799px)"
                                    srcSet="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/bg-intro-mobile.svg 100w"
                                />
                                <source
                                    media="(min-width: 800px)"
                                    srcSet="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/bg-intro-desktop.svg"
                                />
                                <img
                                    src="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/bg-intro-mobile.svg"
                                    alt="background"
                                />
                            </picture>
                            <img
                                src="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/master/images/image-mockups.png"
                                className="mockup"
                                alt="mockup"
                            />
                        </div>
                        <div className="hero-content container">
                            <h1>Next generation digital banking</h1>
                            <p>
                                Take your financial life online. Your Easybank account will be a
                                one-stop-shop for spending, saving, budgeting, investing, and much
                                more.
                            </p>
                            {/* cta btn */}

                        </div>
                    </div>
                </div>
                <div className="value-section">
                    <div className="desc container">
                        <h1>Why choose Mor & Mor Bank?</h1>
                        <p>
                            We leverage Open Banking to turn your bank account into your financial
                            hub. Control your finances like never before.
                        </p>
                    </div>
                    <div className="value-desc container">
                        <div className="value value-1">
                            <img
                                src="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-online.svg"
                                className="icon"
                                alt="icon"
                            />
                            <h3>online banking</h3>
                            <p>
                                Our modern web and mobile applications allow you to keep track of your
                                finances wherever you are in the world.
                            </p>
                        </div>
                        <div className="value value-2">
                            <img
                                src="
https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-budgeting.svg"
                                className="icon"
                                alt="icon"
                            />
                            <h3> Simple Budgeting</h3>
                            <p>
                                See exactly where your money goes each month. Receive notifications
                                when you’re close to hitting your limits.
                            </p>
                        </div>
                        <div className="value value-3">
                            <img
                                src="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-onboarding.svg"
                                className="icon"
                                alt="icon"
                            />
                            <h3>Fast Onboarding</h3>
                            <p>
                                We don’t do branches. Open your account in minutes online and start
                                taking control of your finances right away.
                            </p>
                        </div>
                        <div className="value value-4">
                            <img
                                src="
https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-api.svg"
                                className="icon"
                                alt="icon"
                            />
                            <h3>Open API</h3>
                            <p>
                                Manage your savings, investments, pension, and much more from one
                                account. Tracking your money has never been easier.
                            </p>
                        </div>
                    </div>
                </div>
                <section className="article-section">
                    <div className="article container">
                        <h4> Savings Accounts</h4>

                        <p> Savings accounts pay interest to the depositor. Depending on how long account holders hope to keep their money in the bank, they can open a regular savings account that pays a little interest or a certificate of deposit (CD) that pays a little more interest. The CDs can earn interest for as little as a few months or as long as five years or more.

                            It is important to note that the money in checking accounts, savings accounts, and CDs is insured up to a maximum of $250,000 by the federal government through the Federal Deposit Insurance Corp. (FDIC).
                            1</p>

                        <h4> Loan Services</h4>
                        <p> Banks make loans to consumers and businesses. The cash that is deposited by their customers is lent out to other customers at a higher rate of interest than the depositor is paid.

                            At the highest level, this is the process that keeps the economy humming. People deposit their money in banks; the bank lends the money out in car loans, credit cards, mortgages, and business loans. The loan recipients spend the money they borrow, the bank earns interest on the loans, and the process keeps money moving through the system.

                            Just like any other business, the goal of a bank is to earn a profit for its owners. For most banks, the owners are their shareholders. Banks do this by charging more interest on the loans and other debt they issue to borrowers than they pay to people who use their savings vehicles.

                            For example, a bank may pay 1% interest on savings accounts and charge 6% interest for its mortgage loans, earning a gross profit of 5% for its owners.</p>
                        <h4> Types of Banks</h4>
                        <p> Most banks can be categorized as retail, commercial or corporate, or investment banks. The big global banks often operate separate arms for each of these categories.</p>

                        <h4> Retail Banks</h4>
                        <p>  Retail banks offer their services to the general public and usually have branch offices as well as main offices for the convenience of their customers.

                            They provide a range of services such as checking and savings accounts, loan and mortgage services, financing for automobiles, and short-term loans such as overdraft protection. Many also offer credit cards.

                            They also offer access to investments in CDs, mutual funds, and individual retirement accounts (IRAs). The larger retail banks also cater to high-net-worth individuals with specialty services such as private banking and wealth management services.

                            Examples of retail banks include TD Bank and Citibank.</p>

                        <h4>Commercial or Corporate Banks</h4>
                        <p>  Commercial or corporate banks tailor their services to business clients, from small business owners to large, corporate entities. Along with day-to-day business banking, these banks also offer credit services, cash management, commercial real estate services, employer services, and trade finance,

                            JPMorgan Chase and Bank of America are examples of commercial banks, though both have large retail banking divisions as well.</p>

                        <h4> Investment Banks</h4>
                        <p>   Investment banks focus on providing corporate clients with complex services and financial transactions such as underwriting and assisting with merger and acquisition (M&A) activity. They are primarily financial intermediaries in these transactions.

                            Their clients include large corporations, other financial institutions, pension funds, governments, and hedge funds.

                            Morgan Stanley and Goldman Sachs are among the biggest U.S. investment banks.</p>

                        <h4>Central Banks</h4>
                        <p> Unlike the banks above, central banks does not deal directly with the public. A central bank is an independent institution authorized by a government to oversee the nation's money supply and its monetary policy.

                            As such, central banks are responsible for the stability of the currency and of the economic system as a whole. They also have a role in regulating the capital and reserve requirements of the nation's banks.

                            The U.S. Federal Reserve Bank is the central bank of the U.S. The European Central Bank, the Bank of England, the Bank of Japan, the Swiss National Bank, and the People’s Bank of China are among its counterparts in other nations.</p>

                        <h4>Bank vs. Credit Union</h4>
                        <p>Credit unions offer banking services but, unlike banks, they are not-for-profit institutions created for and managed by their members or customers. Credit unions provide routine banking services to their clients, who are generally called members.

                            Credit unions are created, owned, and operated by their clients, and are generally tax-exempt. Members purchase shares in the co-op, and that money is pooled together to fund the credit union's loans.

                            They tend to provide a limited range of services compared to banks. They also have fewer locations and automated teller machines (ATMs).</p>
                        <h4>How Do I Know My Money Is Safe in a Bank?</h4>
                        <p>The Federal Deposit Insurance Corporation (FDIC) is an independent agency created by Congress to maintain stability and public confidence in the U.S. financial system. The FDIC supervises and examines banks to ensure that the money they handle is safe.

                            Moreover, it insures your money. The insurance maximum is $250,000 per depositor, per insured bank, for each account ownership category.

                            You don't have to purchase this insurance. If you open a deposit in an FDIC-insured bank, you are automatically covered.

                            The agency's BankFind site can help you identify FDIC-insured banks and branches.</p>
                        <h4>Are Any Non-Bank Accounts Insured?</h4>
                        <p>  The mission of the Securities Investor Protection Corporation (SIPC) is to recover cash and securities in the event a member brokerage firm fails. SIPC is a nonprofit corporation that Congress created in 1970. SIPC protects the customers of all registered brokerage firms in the U.S. This applies to stocks and bonds (securities) and cash that a brokerage firm holds. Brokerage firms rarely fail or close suddenly, but if this occurs, the SIPC helps close the firm through liquidation and establishes claims processes by which it can protect the investor. SIPC protects your account for up to $500,000 in securities. This includes a limit of $250,000 in cash in your account. This link will show you a list of all registered SIPC members.</p>

                        <h4>Should I Choose a Retail Bank, Credit Union, or Commercial Bank?</h4>
                        <p> You should consider whether you want to keep both business and personal accounts at the same bank, or whether you want them at separate banks. A retail bank, which has basic banking services for customers, is the most appropriate for everyday banking. You can choose a traditional bank, which has a physical building, or an online bank if you don't want or need to physically visit a bank branch. You might consider a credit union, which is a nonprofit institution and is available to serve the needs of people with a common employer, labor union, or professional interest.</p>

                        <h4>What Other Factors Go Into Choosing a Bank?</h4>
                        <p>  Bank size is another consideration. Large retail banks are often well-known, big-name banks and have locations throughout the U.S., which is convenient if you travel often for work or vacation. You would have easier access to your funds when you're away and may be able to avoid foreign ATM fees.

                            Otherwise, you might find that a smaller bank would offer more personalized customer service and the products you prefer. A community bank, for example, takes deposits and lends locally, which could offer a more personalized banking relationship.

                            Choose a convenient location if you are choosing a bank with a brick-and-mortar location. If you have a financial emergency, you don't want to have to travel a long distance to get cash.

                            See if the bank you are choosing offers other services such as credit cards, loans, and safe deposit boxes. Some banks also offer smartphone apps, which can be useful.

                            Check the fees associated with the accounts you want to open. Banks charge interest on loans as well as monthly maintenance fees, overdraft fees, and wire transfer fees. Some large banks are moving to end overdraft fees in 2022, so that could be an important consideration.
                            4</p>

                        <h4>The Bottom Line</h4>
                        <p>  At the very least, a bank is where you stash your cash until you use it to pay the bills or withdraw money. It can also be the place where you get a loan to buy a car or a mortgage to buy a house. If you're running a small business, it may be where you go to borrow money to expand or improve.

                            Before choosing a bank, you should make a comparison of the various fees and charges that come with your accounts or any loans you might need. A bit of research and comparison will ensure you find the right fit for safeguarding your money, establishing credit, making payments, applying for loans, receiving funds, and saving money for future needs such as retirement, emergencies, and homebuying.</p>
                        {/* article */}
                    </div>
                </section>
                {/* overlay */}
                <div className="overlay" />
                {/* end of overlay */}
                <footer>
                    <div className="footer-items container">
                        {/* single item */}
                        <div className="ftr-item-1">

                            <div className="social">
                                <a href="#" title="facebook">
                                    <img
                                        src="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-facebook.svg"
                                        alt="facebook"
                                    />
                                </a>
                                <a href="#" title="youtube">
                                    <img
                                        src="
https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-youtube.svg"
                                        alt="youtube"
                                    />
                                </a>
                                <a href="#" title="twitter">
                                    <img
                                        src="
https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-twitter.svg"
                                        alt="twitter"
                                    />
                                </a>
                                <a href="#" title="pinterest">
                                    <img
                                        src="https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-pinterest.svg"
                                        alt="pinterest"
                                    />
                                </a>
                                <a href="#" title="instagram">
                                    <img
                                        src="
https://raw.githubusercontent.com/FesoQue/Easybank-landing-page/862ba75ea9d9c1f583baea94870720a316cf6659/images/icon-instagram.svg"
                                        alt="instagram"
                                    />
                                </a>
                            </div>
                        </div>
                        {/* navigations */}
                        <div className="ftr-item-2">
                            <ul className="ftr-nav nav-1">
                                <li className="nav-list">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="nav-list">
                                    <a href="#">Contact</a>
                                </li>
                                <li className="nav-list">
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                            <ul className="ftr-nav nav-2">
                                <li className="nav-list">
                                    <a href="#">Careers</a>
                                </li>
                                <li className="nav-list">
                                    <a href="#">Support</a>
                                </li>
                                <li className="nav-list">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ftr-item-3">
                            {/* cta btn */}

                            {/* copyright */}
                            <div className="copyright">
                                <p>
                                    Mor & Mor Bank. all rights reserved <span className="date" />
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>


        </>
    )
}
