import Container from '../Container';
import Form from './FormContainer';
import SignUpHeader from '../SignUpHeader';

const FormContainer = () => {
  return (
    <Container>
        <SignUpHeader />    
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[34vw] h-[20rem] relative rounded-tl-full rounded-tr-full border border-gray-200'>
                <div className='w-[29vw] h-[17rem] absolute bottom-0 left-1/2 transformContainer -translate-x-1/2 rounded-t-full bg-gray-200 flex items-center justify-center flex-col'>
                    <img alt='logo' src='/images/EFA_Registered Logo.png' className='w-[38%]' />
                    <div className='w-[38%] my-5 border-b-2 border-gray-300'></div>
                    <div className='text-center max-w-[75%]'>
                        <h3 className='text-lg mb-2 font-medium'>Create a Emotional First Aid - Enabler Account</h3>
                        <p className='text-xs text-gray-400'>By signin up you can start posting, replaying to topics, earn badges, favorite, vote topics and many more.</p>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    </Container>
  )
}

export default FormContainer;