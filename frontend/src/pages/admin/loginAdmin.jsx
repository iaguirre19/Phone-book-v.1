import agiLogo from "../../../public/agi-business_logo_blanco.png"

const LoginAdmin = () => {


    return (
        <>
                <section className="login">
                  <div className="login__container">
                    <div className="login__content-left">
                      <img
                        src={agiLogo}
                        alt="AGI logo"
                      />
                    </div>
                    <div className="login__content-right">
                      <div className="login__right-title">
                        <h2>Login in to your Account</h2>
                        <span>
                          Enter the company directory and explore information and
                          collaboration.
                        </span>
                      </div>
                      <form className="login__right-form" id="form">
                        <label htmlFor="user">User:</label>
                        <div className="input-container">
                          <input
                            className="login-input"
                            type="email"
                            id="userLogin"
                            name="email"
                            placeholder="Enter your email as a user"
                            required
                          /><br/><br/>
                          <span className="input-icon-left"><i className='bx bx-user'></i></span>
                        </div>

                        <label htmlFor="password">Password:</label>
                        <div className="input-container">
                          <span className="input-icon"><i className='bx bx-show' id="showPassword"></i></span>
                          <input
                            className="login-input"
                            type="password"
                            id="passwordLogin"
                            name="password"
                            placeholder="Enter your password..."
                            required
                          /><br/><br/>
                          <span className="input-icon-left"><i className='bx bx-lock'></i></span>
                        </div>

                        <input
                          id="btnLogin"
                          className="login-btn"
                          type="submit"
                          value="Login"
                        />
                      </form>
                      <div className="login__bottom">
                        <div className="login__bottom-data">
                          <div className="login__data-line"></div>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>        
        </>
    ) 

}


export default LoginAdmin