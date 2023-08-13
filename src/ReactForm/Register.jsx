import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "../App.css"
import React from 'react'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {

     const userRef = useRef();
     const errorRef = useRef();

     const [user, setUser] = useState('')
     const [validName, setValidName] = useState(false)
     const [userFocus, setUserFocus] = useState(false)

     const [pwd, setPwd] = useState('')
     const [validPwd, setValidPwd] = useState(false)
     const [pwdFocus, setPwdFocus] = useState(false)

     const [matchPwd, setMatchPwd] = useState('')
     const [validMatch, setValidMatch] = useState(false)
     const [matchFocus, setMatchFocus] = useState(false)

     const [errMsg, setErrMsg] = useState('')
     const [success, setSuccess] = useState('')

     useEffect(() => {
          userRef.current.focus();
     }, [])

     useEffect(() => {
          const result = USER_REGEX.test(user)
          console.log(result)
          console.log(user)
          setValidName(result)
     }, [user])

     useEffect(() => {
          const result = PWD_REGEX.test(pwd)
          console.log(result)
          console.log(pwd)
          setValidPwd(result)
          const match = pwd === matchPwd
          setValidMatch(match)
     }, [pwd, matchPwd])

     useEffect(() => {
          setErrMsg('')
     }, [user, pwd, matchPwd])

     return (
          <section className="mt-10 items-center">
               <form className="flex flex-col gap-5 mt-5 w-3/12 m-auto">
                    <h1 className="text-3xl text-center">Register Form</h1> <hr />

                    <p className={`my-5 ${errMsg ? "" : "hidden"}`} ref={errorRef} aria-live="assertive" >

                    </p>

                    <div className="flex flex-col gap-1">
                         <label htmlFor="user">Username:</label>
                         <input onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} aria-describedby="uidnote" aria-invalid={`${validName ? "false" : "true"}`} required type="text" autoComplete="off" onChange={(e) => setUser(e.target.value)} id="user" className="bg-slate-300 border rounded-md px-3 py-1" ref={userRef} />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                         <label htmlFor="password">Password:</label>
                         <input required type="password" className="bg-slate-300 border rounded-md px-3 py-1" id="password" />
                    </div>
                    <div className="flex flex-col gap-1">
                         <label htmlFor="confirmPassword">Confirm Password:</label>
                         <input required type="password" className="bg-slate-300 border rounded-md px-3 py-1" id="confirmPassword" />
                    </div>
                    <button className="p-1 mt-4 w-full bg-blue-300 rounded-md border transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-blue-500 hover:text-blue-500 hover:-translate-y-2">Register</button>
               </form>
          </section>
     )
}

export default Register