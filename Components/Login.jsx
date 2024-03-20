
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: left ;
  align-items: center;
  height: 100vh;
  position: relative;
  padding-left: 500px;
  margin-right: 200px;
  background-image: url('https://www.stewalkerphotography.com/wp-content/uploads/2023/03/black-and-white-wedding-photos26.jpg'); 

`;

const Box = styled.div`
  width: 450px;
  padding: 90px;
  background-color:#d5b385 ;
  border-radius: 5px;
`;

// Add a new styled component for the signup section
const SignupSection = styled.div`
  position: absolute;
  right: 20px;
  top: 300px;
  background-size: cover;
  padding: 300px;
  border-radius: 5px;
`;


const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d5b385 ;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    alert(`Login attempted with email: ${email}`);
  };

  return (
    <Container>
      <Box>
       
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        
        <Button onClick={handleLogin}><a href='/'>Sign In</a></Button>
      </Box>
      {/* Add the signup section */}
      <SignupSection>
      <p1>READY FOR YOUR dream DAY?</p1>
        <Button><a href='/signup'>Sign Up</a></Button>
      </SignupSection>
    </Container>
  );
};

export default Login;