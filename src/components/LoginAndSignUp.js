import React, {Fragment, useState} from 'react'
import Form from 'react-bootstrap/Form'
import cx from 'classnames'

import styles from './LoginAndSignUp.module.scss'

function LoginAndSignUp() {

    const [text, setText] = useState('')

    const handleClickSignUp = () => {
        setText(`${styles.sign_up_mode}`)
    } 

    const handleClickSignIn = () => {
        setText('')
    } 

    return (
        <Fragment>
            <div className={cx(styles.container, text)} id="container">
                <div className={styles.forms_container}>
                    <div className={styles.signin_signup}>
                        <Form action="" className={styles.sign_in_form}>
                            <h2 className={styles.title}>Sign In</h2>
                            <div className={styles.input_field}>
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className={styles.input_field}>
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password"/>
                            </div>

                            <input type="submit" value="Login" className={styles.btn}/>

                            {/* To be used later*/}
                            {/* <p className={styles.social_text}>Or Sign In with social platforms</p>
                            <div className={styles.social_media}>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div> */}
                        </Form>

                        <Form action="" className={styles.sign_up_form}>
                            <h2 className={styles.title}>Sign Up</h2>
                            <div className={styles.input_field}>
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className={styles.input_field}>
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className={styles.input_field}>
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password"/>
                            </div>

                            <input type="submit" value="Sign Up" className={styles.btn}/>

                            {/* To be used later*/}
                            {/* <p className="social-text">Or Sign Up with social platforms</p>
                            <div className={styles.social_media}>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="!#" className={styles.social_icon}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div> */}
                        </Form>
                    </div>
                </div>

                <div className={styles.panels_container}>
                    <div className={cx(styles.panel, styles.left_panel)}>
                        <div className={styles.content}>
                            <h3>New here ?</h3>
                            <p>Why don't you sign up and join our incredible family. We would be glad to have you onboard</p>
                            <button className={cx(styles.btn, styles.btn_transparent)} onClick={handleClickSignUp} id="sign-up-btn">Sign Up</button>
                        </div>

                        <img src="login-svg/undraw_project_team_lc5a.svg" className={styles.image} alt="signin"/>
                    </div>

                    <div className={cx(styles.panel, styles.right_panel)}>
                        <div className={styles.content}>
                            <h3>One of Us ?</h3>
                            <p>Welcome back, glad to have you a board.</p>
                            <button className={cx(styles.btn, styles.btn_transparent)} onClick={handleClickSignIn} id="sign-in-btn">Sign In</button>
                        </div>

                        <img src="login-svg/undraw_startup_life_2du2.svg" className={styles.image} alt="signup"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginAndSignUp;