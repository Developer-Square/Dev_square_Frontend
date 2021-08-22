import React, {Fragment, useState} from 'react'
import {useDispatch} from 'react-redux'
import Form from 'react-bootstrap/Form'
import cx from 'classnames'
import {ToastContainer} from 'react-toastify'
import $ from 'jquery'

//Own Components
import styles from './LoginAndSignUp.module.scss'
import Api from '../services/network'
import notify from '../helpers/Notify'
import {addUser, updateAuth} from '../redux/action-creator/index'
import MakingPancake from '../Dashboard/Reusable Components/MakingPancake'

function LoginAndSignUp({history}) {
    const dispatch = useDispatch()
    const api = new Api()

    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //When the forgot state changes to true the form layout will shift
    const [forgot, setForgot] = useState(false)
    //When confirm is set to true the whole pages goes blank telling the user
    //to check his/her email.
    const [confirm, setConfirm] = useState(false)
    const [loading, setLoading] = useState(false)

    //adding keyup event listener
    $(function(){
        $(document).on('keyup', function(evt){
            if (evt.key === 13) {
                evt.preventDefault()
                handleLogin(evt)
            }
        });
    });

    const handleClickSignUp = () => {
        setText(`${styles.sign_up_mode}`)
    } 

    const handleClickSignIn = () => {
        setText(`${styles.sign_in_mode}`)
        setEmail('')
        setPassword('')

    }

    const clearFields = () => {
        setEmail('')
        setPassword('')
    }

    function handleLogin(e) {
        e.stopPropagation()
        e.preventDefault()

        if (email === '' && password === '') {
            notify('error', 'Please fill in all the fields')
        } else {
            setLoading(true)
            const credentials = {
                email,
                password
            }
    
            //Api Call
            api.auth().login(credentials)
            .then((res) => {
                if (res.status === 200) {
                    setLoading(false)
                    localStorage.setItem('jwtToken', res.data.tokens.access.token)
                    localStorage.setItem('refreshToken', res.data.tokens.refresh.token)
                    localStorage.setItem('userID', res.data.user.id)
                    dispatch(addUser(res.data.user))
                    dispatch(updateAuth())
                     //Clear the inputs
                    clearFields()
                    history.push('/dashboard/home')
                }
            })
            .catch((error) => {
                if (error && error.response) {
                    const {message} = error.response.data
                    notify('error', message)
                    setLoading(false)
                }
            })
        }
    }

    function handleForgotPassword(e) {
        e.preventDefault()
        if (email === '') {
            notify('error', 'Fill in the required field')
        } else {
            const data = {
                email
            }
            api.auth().forgotPassword(data).then((res) => {
                if (res.status === 204) {
                    notify('success', 'Success')
                    setConfirm(true)
                }
            })
            .catch((err) => {
                const {message} = err.response.data
                notify('error', message)
            })
        }
    }

    return (
        <Fragment>
            {/* The pancake loader that appears */}
            <MakingPancake loading={loading}/>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {confirm ? 
            <div className={styles.confirm_page}>
                <div>Please check your email for further details.</div>
                <span>Cosmic Software Solutions</span>
            </div>
            :
            <div className={cx(styles.container, text)} id="container">
            <div className={styles.forms_container}>
                <div className={styles.signin_signup}>
                    <Form className={styles.sign_in_form}>
                        {/* Changing the layout to bring out the forgot password form */}
                        {forgot ? 
                        <>
                            <h2 className={styles.title}>Forgot Password</h2>
                            <div className={styles.input_field}>
                                <i className="fas fa-user"></i>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                            </div>
                            <div className={styles.buttons}>
                                <input type="submit" value="Send" onClick={handleForgotPassword} className={styles.btn}/>
                                <input type="button" value="Back" onClick={() => setForgot(false)} className={cx(styles.btn, styles.btn_forgot)}/>
                            </div>
                        </>
                        :
                        <>
                            <h2 className={styles.title}>Sign In</h2>
                            <div className={styles.input_field}>
                                <i className="fas fa-user"></i>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                            </div>
                            <div className={styles.input_field}>
                                <i className="fas fa-lock"></i>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                            </div>
                            <p className={styles.social_text} onClick={() => setForgot(true)}>Forgot Password</p>
                            <div className={styles.buttons}>
                                <input type="submit" value="Login" onClick={handleLogin} className={styles.btn}/>
                                <a href="/" className={cx(styles.btn, styles.btn_back)}>Back to Homepage</a>
                            </div>
                        </>
                        }
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
                        <div className={styles.buttons}>
                        <input type="submit" value="Sign Up" className={styles.btn}/>
                        <a href="/" className={cx(styles.btn, styles.btn_back)}>Back to Homepage</a>
                        </div>
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
        }
        </Fragment>
    )
}

export default LoginAndSignUp;