import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';



const MhsList = () => {
    const[mhsdata, mhsdatachange]=useState(null);
    const navigate=useNavigate();

    const LoadDetail =(Npm)=>{
        navigate("/mahasiswa/detail/"+Npm);
    }
    
    const LoadEdit =(Npm)=>{
        navigate("/mahasiswa/edit/"+Npm);
        
    }
    const Removefunction =(Npm)=>{
        if(window.confirm('Do You want to Remove?')){
            fetch(" http://localhost:8000/mahasiswa/"+Npm,{
                method:"DELETE",
            }).then((res)=>{
                console.log(res);
                alert('Removed Successfully')
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
        }

    }



    
    useEffect (()=>{
        fetch("http://localhost:8000/mahasiswa").then((res)=>{
            return res.json();
        }).then((resp)=>{
            mhsdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
    return (

        <div>
        <div className="Container">
            <div className="card">
                <div className="card-title">
                    <h2 className="text-black fs-1 mt-2 text-center">Mahasiswa List</h2>
                </div>
                <div className="card-body">
                <div className="divbtn">
                    <Link to ="mahasiswa/create" className="btn btn-success">Tambah Mahasiswa</Link>
                </div>
                    <table className="table table-bordered border-black">
                        <thead className="table-dark text-white">
                            <tr>
                                <td>
                                    NPM
                                </td>
                                <td>
                                    Nama
                                </td>
                                <td>
                                    Kelas
                                </td>
                                <td>
                                    Semester
                                </td>
                                <td>
                                    Action
                                </td>
                            </tr>

                        </thead>
                        <tbody>
                            { mhsdata &&
                                mhsdata.map(item=>(
                                   <tr key={item.Npm}>
                                    <td>{item.Npm}</td>
                                    <td>{item.Nama}</td>
                                    <td>{item.Kelas}</td>
                                    <td>{item.Semester}</td>
                                    <td><a onClick={()=>{LoadEdit(item.Npm)}} className="btn btn-warning">Edit</a>
                                        <a onClick={()=>{Removefunction(item.Npm)}} className="btn btn-danger">Remove</a>
                                        <a onClick={()=>{LoadDetail(item.Npm)}} className="btn btn-primary">Details</a>
                                    </td>
                                   </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MhsList;