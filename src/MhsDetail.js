import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const  MhsDetail = () => {
    const{mhsNpm}=useParams();

    const[mhsdata, mhsdatachange]=useState({})


    useEffect(()=>{
        fetch("http://localhost:8000/mahasiswa/"+mhsNpm).then((res)=>{
            return res.json();
        }).then((resp)=>{
            mhsdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[mhsNpm]);

    return (
        <div>
            <div className="card">
                <h5 className="card-header">Mahasiswa</h5>
                <div className="card-body">
                    <h2 className="card-title">Data Lengkap Mahasiswa : {mhsdata.Nama} ({mhsdata.Npm})</h2>
                    <h3 className="card-text">Informasi Mahasiswa :</h3>
                    <h4 className="card-text">Kelas : {mhsdata.Kelas}</h4>
                    <h4 className="card-text">Semester : {mhsdata.Semester}</h4>
                    <Link className="btn btn-danger" to="/">Back To Listing</Link>
                </div>
            </div>


            
        </div>
    );
}
export default MhsDetail;