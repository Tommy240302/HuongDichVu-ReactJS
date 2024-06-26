import React, { useState } from "react"
import { fetchData, showToastMessage, showToastError } from "../global"
import { ToastContainer } from "react-toastify"

const ModelCreateDeck = React.forwardRef(({ getDecks }, ref) => {

    const [isShow, setIsShow] = useState(false)
    const [name, setName] = useState('')
    const [decs, setDesc] = useState('')


    function show() {
        setIsShow(true)
    }

    function close() {
        setIsShow(false)
    }
    
    // description

    async function handleCreateDeck(event) {
        event.preventDefault()
        const subUrl = "/decks" 

    
        const body = {name, description: decs}
        try { 
            await fetchData(subUrl, 'POST', body)
            await getDecks()
            showToastMessage("Tạo bộ thẻ thành công")
            document.getElementById('name-deck').value = ''
            document.getElementById('decs-deck').value = ''
        }
        catch(error) {
            showToastMessage(error.message)
        }
    }


    React.useImperativeHandle(ref, () => ({
        show
    }));

    return (isShow && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white p-6 rounded-lg shadow-lg z-50">
            <div className="flex justify-end">
                <button onClick={close} className="pr-2">
                    <i className="fa-solid fa-xmark text-4xl text-gray-500"></i>
                </button>
            </div>
            {/* form */}    
            <div className="relative w-[500px]">
                <form onSubmit={handleCreateDeck} className="relative rounded-md">

                    <div className="p-4 md:p-5 space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Tên bộ thẻ <span className='text-ctred'>*</span></label>
                            <input onChange={event => setName(event.target.value)} id="name-deck" type="text" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="English" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Mô tả bộ thẻ</label>
                            <input onChange={event => setDesc(event.target.value)} id="decs-deck" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tạo</button>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer/>
    </div>)
   
})

export default ModelCreateDeck