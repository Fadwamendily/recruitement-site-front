import React, { useEffect } from 'react'
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { getoffrebyid, selectsingleoffre } from '../../features/offres/offreEmploiSlice';
import moment from 'moment'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { RiSendPlane2Fill } from 'react-icons/ri'
import './single.css'
import { selectautheduser, selectuser } from '../../features/users/userSlice';
import { useDispatch } from 'react-redux';
import { creatcomment, selectcreatecomment } from '../../features/comments/commentSlice';

const SinglePage = () => {
    const user = useSelector(selectuser)

    const offre = useSelector(selectsingleoffre)


    const dispatch = useDispatch()

    const createcommstatus = useSelector(selectcreatecomment)

    useEffect(() => {
        dispatch(getoffrebyid(offre._id))
    }, [createcommstatus])

    const CommentItem = ({ comment }) => {
        return (
            <div className='commentitem'  >
                <div className="commentitemtop">
                    <img src={'http://localhost:5000/getfile/' + comment.user.avatar} alt="" />
                    <div className='commentright' >
                        <h5>{comment.user.nom}</h5>
                        <p>{comment.msg}</p>
                        <span>{comment.createdAt}</span>
                    </div>
                </div >
            </div>
        )
    }

    const comment = (e) => {


        let data = {
            msg: e.target.value,
            offre: offre._id,
            user: user._id
        }

        if (e.key === 'Enter') {
            dispatch(creatcomment(data))
            document.getElementById('commentinput').value = ""
        }

    }


    return (
        <div>

            <Row  >
                <Col span={24}>image maps</Col>
            </Row>
            <hr />

            <div style={{ display: 'flex', justifyContent: "space-between" }}  >
                <div style={{ display: "flex" }}  >
                    <img src={'http://localhost:5000/getfile/' + offre.entreprise.avatar} alt="" className='img' />
                    <h4 style={{ marginLeft: '20px' }}  >{offre.entreprise.nom}</h4>

                </div>

                <div>
                    {(user.__t === 'condidat') && <button className="btn btn-primary" >postuler</button>}

                    {(user.__t === 'entreprise') && <button className="btn btn-primary">Update</button>}
                </div>
            </div>

            <div style={{ marginTop: '20px' }}  >
                <h5>{offre.poste}</h5>
                <p>
                    {offre.description}
                </p>
            </div>


            <hr />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}  >
                <div>{moment(offre.createdAt).format('DD-MM-YYYY')}</div>
                <div>{offre.type_contrat}</div>
                <div>{offre.lieu}</div>
            </div>

            {/* <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-12">
                        <div className="d-flex flex-column comment-section">

                            <div className="bg-white">
                                <div className="d-flex flex-row fs-12">
                                    <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up" /><span className="ml-1">Add to favoris List </span></div>
                                    <div className="like p-2 cursor"><i className="fa fa-commenting-o" /><span className="ml-1">Comment</span></div>
                                    <div className="like p-2 cursor"><i className="fa fa-share" /><span className="ml-1">Share</span></div>
                                </div>
                            </div>
                            <div className="bg-light p-2">
                                <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src={'http://localhost:5000/getfile/' + user.avatar} width={40} width={40} /><textarea className="form-control ml-1 shadow-none textarea" defaultValue={""} /></div>
                                <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="comments">
                <div style={{ display: 'flex', alignItems: "center" }} >
                    <img src={'http://localhost:5000/getfile/' + offre.entreprise.avatar} alt="" className='commenter' />
                    <div className='commentinput' >
                        <input type="text" id='commentinput' onKeyDown={(e) => comment(e)} />
                        <RiSendPlane2Fill className="sendicon" />
                    </div>
                </div>
                {
                    offre.commentaires.map((o, i) => {
                        return (

                            <CommentItem comment={o} />
                        )
                    })
                }

            </div>

        </div>

    )
}

export default SinglePage
