import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/home/posts');
        window.scrollTo(0,0);
    };
    return (
        <form className='border p-8 min-w-[34vw]'> 
                <div className='flex gap-4 mb-4'>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>First Name</label>
                        <input className='flex-grow block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='John' ></input>
                    </div>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Last Name</label>
                        <input className='flex-grow block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='Doe' ></input>
                    </div>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-gray-400 text-sm'>Email Address</label>
                    <input type='email' className='block p-2 border-b-2 text-black focus:outline-none' placeholder='john@doe.com' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-gray-400 text-sm'>Password</label>
                    <input type='password' className='block p-2 border-b-2 text-black focus:outline-none' />
                </div>
                <div className='flex justify-end relative items-center py-4'>
                    <div class="flex-grow border-t border-gray-200"></div>

                    <p className='px-1 text-xs text-gray-400 flex gap-1'>
                        Privacy Settings
                        <span className='text-black font-medium'>(OPTIONAL)</span>
                    </p>
                    <div class="flex-grow border-t border-gray-200"></div>
                    <img  className='px-1 w-20' src='/images/profile.png' alt='img' />
                    <div class="flex-grow border-t border-gray-200"></div>
                </div>
                <div className='mb-4'>
                    <p className='text-sm text-gray-400 mb-3'>Who can see my Profile?</p>
                    <div className='flex gap-4 justify-start'>
                        <div className='flex gap-4 border p-2'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Everyone</p>
                        </div>
                        <div className='flex gap-4 border p-2'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Only Friends</p>
                        </div>
                        <div className='flex gap-4 border p-2'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Invite Only</p>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <p className='text-sm text-gray-400 mb-3'>Automatically share my posts and replies on Social Networks</p>
                    <div className='flex gap-4 justify-start'>
                        <div className='flex gap-4 border p-2'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Facebook</p>
                        </div>
                        <div className='flex gap-4 border p-2'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Twitter</p>
                        </div>
                        <div className='flex gap-4 border p-2'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Google+</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end relative items-center py-4'>
                    <div class="flex-grow border-t border-gray-200"></div>

                    <p className='px-1 text-xs text-gray-400 flex gap-1'>
                        Small Survey
                        <span className='text-black font-medium'>(OPTIONAL)</span>
                    </p>
                    <div class="flex-grow border-t border-gray-200"></div>
                    <img  className='px-1 w-20' alt='img' src='/images/js-file.png' />
                    <div class="flex-grow border-t border-gray-200"></div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>How old are you?</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='number' placeholder='21' ></input>
                    </div>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Who are you?</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='Doe' ></input>
                    </div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Will you be friendly here??</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='number' placeholder='21' ></input>
                    </div>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Where do you heard about us?</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='Doe' ></input>
                    </div>
                </div>
                <div className='flex justify-end relative items-center py-4'>
                    <div class="flex-grow border-t border-gray-200"></div>

                    <p className='px-1 text-xs text-gray-400 flex gap-1'>
                        Link Social Networks
                        <span className='text-black font-medium'>(OPTIONAL)</span>
                    </p>
                    <div class="flex-grow border-t border-gray-200"></div>
                    <img  className='px-1 w-20' alt='img' src='/images/js-file.png' />
                    <div class="flex-grow border-t border-gray-200"></div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Facebook URL</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='' ></input>
                    </div>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Twitter Username</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='Doe' ></input>
                    </div>
                </div>
                <div className='flex gap-4 mb-4'>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Google+ Account ID</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='21' ></input>
                    </div>
                    <div className='flex flex-col flex-grow'>    
                        <label className='text-gray-400 text-sm'>Youtube Channel URL</label>
                        <input className='block p-2 border-b-2 text-black focus:outline-none' type='text' placeholder='Doe' ></input>
                    </div>
                </div>
                <div className='flex justify-start items-center py-4'>
                    <div class="flex-grow border-t border-gray-200"></div>

                    <p className='px-1 text-xs text-gray-400 flex gap-1'>
                        Interested Categories
                        <span className='text-black font-medium'>(OPTIONAL)</span>
                    </p>
                    <div class="flex-grow border-t border-gray-200"></div>
                </div>
                <div className='mb-4'>
                    <p className='mb-4 text-sm text-gray-400'>Categories I'm interested in</p>
                    <div className='flex gap-4 justify-evenly mb-4'>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Select All</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Mental Health</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>MH Tips</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Support</p>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-evenly mb-4'>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Enabler</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Exchange</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Art</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Q&As</p>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-evenly mb-4'>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Social</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Random</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Music</p>
                        </div>
                        <div className='flex gap-4 h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Science</p>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-evenly mb-4'>
                        <div className='flex gap-4 items-center h-1/2 border p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Pets</p>
                        </div>
                        <div className='flex gap-4 border p-2 h-1/2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Education</p>
                        </div>
                        <div className='flex gap-4 border h-1/2 p-2 w-1/4'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Video</p>
                        </div>
                        <div className='gap-4 border p-2 w-1/4 invisible'>
                            <input type='checkbox' className='accent-gray-200' />
                            <p className='text-sm'>Video</p>
                        </div>
                    </div>
                </div>
                <div className='border-b-[1px] border-gray-200 w-full mb-6'></div>
                <div className='flex gap-4 items-center justify-start ml-9 mb-4'>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='accent-gray-200' />
                        <p className='text-sm text-gray-400'>I agree to the Terms & Conditions</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='accent-gray-200' />
                        <p className='text-sm text-gray-400'>Subscribe to newsletter</p>
                    </div>
                </div>
                <div className='my-4'>
                    <button onClick={handleSubmit} className='py-4 w-[90%] mx-auto text-white bg-red-700 flex justify-center items-center transition hover:opacity-80'>Create New Account</button>
                </div>
            </form>
    )
}

export default Form;