import React from 'react';

const Comments = () => {
    return (
        <>
        <h2 className='text-center text-3xl font-semibold py-5 mb-5 uppercase'>
            Leave a Comment
        </h2>
        <form action="" className='md:w-1/3 mx-auto flex flex-col justify-center gap-3 '>
            <div className='w-full'>
            <label htmlFor="fname">First Name : </label>
            <input type="text" placeholder='First Name' name='fname' className='w-full rounded-sm'/>
            </div>
            <div>
                <label htmlFor="lname">Last Name : </label>
                <input type="text" placeholder='Last Name' name='lname' className='w-full rounded-sm' />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" className='w-full rounded-sm'/>
            </div>
            <div>
                <textarea name="message" placeholder='Write your message here...' id="message" cols="30" rows="8" className='resize-none w-full mt-3 rounded-sm'></textarea>
            </div>
            <button type="submit" className='btn-primary py-2 px-3 rounded-md uppercase w-1/3 mb-5 mx-auto'>Submit</button>
        </form>
        </>
    );
};

export default Comments;