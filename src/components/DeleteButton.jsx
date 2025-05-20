import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteButton({ id }) {
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/comments/delete/${id}`)
            navigate(0)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <button type="button" class="btn danger" onClick={handleDelete}>Delete</button>
  )
}

export default DeleteButton
