/* eslint-disable react/prop-types */
const Input = ({
  handleChange,
  hint,
  toggleHandler,
  isOpen,
  searchedValue,
  submitHandler,
}) => {
  return (
    <form className="container" onSubmit={submitHandler}>
      <h2>Animated & Autocomplet Search Bar</h2>
      <div className={`input ${isOpen && "active-search"}`}>
        {isOpen && <label htmlFor="input">{hint}</label>}
        <input
          type="text"
          id="input"
          value={searchedValue}
          onChange={handleChange}
        />
        <div className="search-icons" onClick={toggleHandler}>
          <svg
            className="search-btn"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
          <svg
            className="x-icon"
            data-slot="icon"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </form>
  );
};

export default Input;
