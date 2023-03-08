import { render, screen, fireEvent } from '@testing-library/react-native';
import SignInForm from '../../components/SignInForm';


describe('SignIn', () => {
    describe('SignInContainer', () => {
      it.skip('calls onSubmit function with correct arguments when a valid form is submitted', () => {

        const onSubmit = jest.fn()
        render(<SignInForm onSubmit={onSubmit}/>)

        fireEvent.changeText(screen.getByPlaceholderText('Username'), 'ebenezer');
        fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
        fireEvent.press(screen.getByText('Sign in'));

        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenCalledWith({
            username: 'ebenezer',
            password: 'password',
          });

      });
    });
  });