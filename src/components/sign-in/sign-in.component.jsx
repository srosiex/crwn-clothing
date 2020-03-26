import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


export default class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit =e => {
        e.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }


    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit-={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        handleChange={this.handleChange} 
                        type="email" 
                        value={this.state.email}
                        label="email"  
                        required 
                        />
                    <FormInput 
                        name="password" 
                        handleChange={this.handleChange} 
                        type="password" value={this.state.password} 
                        label="password"
                        required 
                        />
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        )
    }
}