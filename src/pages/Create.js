import React, {useState} from 'react'


const Create = () => {

    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!description){
            setError('Pleas add description')
            return
        }
        if (!file){
           setError('Pleas add file')
            return
        }

        const formData = new FormData()
        formData.append('data', JSON.stringify({description}))
        formData.append('files.image', file)
        try {
            const response = await fetch('http://localhost:1337/posts', {
                method: 'POST',
                body: formData
            })
            const data = await response.json()
            console.log('data', data)
        }catch (e) {
            console.log('Exception', e)
           setError(e)
        }

    }



return (
<div className={'Create'}>

    <h2>Create</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder={'Description'}
            value={description} onChange={(e)=> {
                setError('')
            setDescription(e.target.value)
        }}/>
        <input
            type={'file'}
            placeholder={'Add a File'}
            onChange={(e)=> {
                setError('')
                setFile(e.target.files[0])
            }}/>
            <button type={'submit'}>Submit</button>

    </form>
</div>
)

}

export default Create