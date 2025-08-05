export default function Arrow({ classname }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={classname}
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   
                    d="M6 18L18 6m0 0H9m9 0v9"
                ></path>
            </svg>
        </>
    );
}
