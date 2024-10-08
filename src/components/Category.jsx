
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addCategoryAPI, getCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI, uploadVideoAPI } from '../services/allAPI';
import VideoCard from './VideoCard';



const Category = ({setRemoveVideoResponseFromCategory,removeVideoResponseFromView}) => {
  
  const [allCategories, setAllCategories]=useState([])
  const [categoryName, setCategoryName]=useState("")
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(()=>
  {
    getAllCategory()
  },[removeVideoResponseFromView])

  const handleAddCategory = async () =>
  {
    if(categoryName)
    {
      const categoryDetails = {categoryName,allVideo:[]}
      await addCategoryAPI(categoryDetails)
      handleClose()
      setCategoryName("")
      getAllCategory()
    }
    else
    {
    alert("Please fill teh form completely");
    }
  }

  const getAllCategory = async ()=>
  {
    const response = await getCategoryAPI()
    setAllCategories(response.data)
  }

  // console.log(allCategories);
  const deleteCategory = async (id)=>
  {
    await removeCategoryAPI(id)
    getAllCategory()
  }

  const dragOverCategory = (e)=>
  {
        e.preventDefault()
  }

  const videoDropOverCategory = async (e,categoryId)=>
  {
    const videoId = e.dataTransfer.getData("id")
    // console.log(`Video id : ${videoId} Dropped inside category: ${categoryId}`);
    // add video into category
    // get dropping video details
    const {data} = await getSingleVideoAPI(videoId)
    // console.log(data);
    // get details of dropping category and insert video details of category allVideos
    const selectedCategory = allCategories?.find(item=>item.id==categoryId)
    selectedCategory.allVideo.push(data)
    // console.log(selectedCategory);
    // update selected category into json file- call api
    await updateCategoryAPI(categoryId,selectedCategory)
    // remove video from allVideos
    const response = await removeVideoAPI(videoId)
    // pass response to view component
    setRemoveVideoResponseFromCategory(response)
    // get all updated categories
    getAllCategory()
    
  }

  const categoryVideoDragStart= (e,categoryId,video)=>
  {
    // console.log(`Video with id:${video.id} from category id:${categoryId} has started dragging`);
    let dataShare = {categoryId,video}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }
  
  return (
    <>
      <div className='d-flex align-items-center justify-content-around'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-warning rounded-circle fs-5 fw-bolder'>+</button>
      </div>
      <div className="container-fluid mt-3 w-75">
       {
        allCategories?.length > 0?
            allCategories?.map(categoryDetails =>(
                <div key={categoryDetails?.id} droppable="true" onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropOverCategory(e,categoryDetails?.id)} className="border rounded p-3 mb-2">
                    <div className="d-flex justify-content-between">
                    <h5>{categoryDetails?.categoryName}</h5>
                    <button onClick={()=> deleteCategory(categoryDetails?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                    </div>
                  {/* Each Category Videos */}
                  <div className='row mt-2'>
                    {
                        categoryDetails?.allVideo?.length>0 && 
                        categoryDetails?.allVideo?.map(video=>(
                            <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,categoryDetails?.id,video)} key={video?.id} className="col-md-4">
                                <VideoCard displayData={video} insideCategory={true}/>
                            </div>
                        ))

                    }
                  </div>
                </div>
          ))
        :
        <div className='text-danger'>No Categories added yet!!</div>
      }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details ! !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel controlId="floatingInputName" label="Category Name" className="mb-3">
                <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
            </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Category