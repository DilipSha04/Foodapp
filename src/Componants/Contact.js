
const Contact = ()=>{
    return (
        <div className="px-10 flex flex-col justify-center items-center ">
            <h1 className="text-[20px] font-bold my-2 text-slate-900">Contact Us</h1>
            <h3 className="text-slate-900 font-semibold">Contact Us for any Query Call us on +91 789787978</h3>
            <div className="my-4 py-2">
                <form action="" className="flex flex-col bg-orange-100 rounded-md justify-center shadow-xl shadow-slate-600 px-4 py-8 ">
                    <input type="text" className="border bg-orange-200 text-900 rounded-md my-2 outline-orange-900 px-2 py-1" placeholder="Name" />
                    <input type="email" name="" className="border bg-orange-200 text-900 rounded-md my-2 outline-orange-900 px-2 py-1" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="3" className="border bg-orange-200 text-900 rounded-md my-2 outline-orange-900 px-2 py-1" placeholder="Write a message"></textarea>
                    <button className="px-2 py-2 bg-orange-200 text-orange-900 rounded-md font-semibold hover:bg-orange-900 hover:text-orange-200 transition-all duration-200">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;