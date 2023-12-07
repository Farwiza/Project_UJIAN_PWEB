import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

const MhsEdit = () => {
    const{mhsNpm}=useParams();

    //const[mhsdata, mhsdatachange]=useState({})


    useEffect(()=>{
        fetch("http://localhost:8000/mahasiswa/"+mhsNpm).then((res)=>{
            return res.json();
        }).then((resp)=>{
            Npmchange(resp.Npm);
            Namechange(resp.Nama);
            Kelaschange(resp.Kelas);
            Semesterchange(resp.Semester);
            Activechange(resp.Active);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[mhsNpm]);

    const[Npm, Npmchange]=useState("");
    const[Nama, Namechange]=useState("");
    const[Kelas, Kelaschange]=useState("");
    const[Semester, Semesterchange]=useState("");
    const[Active, Activechange]=useState(true);
    const[Validation, Valchange]=useState(false);

    const handlesubmit=(e)=>{
        e.preventDefault();
        const mhsdata = {Npm, Nama, Kelas, Semester, Active};
        

        fetch(" http://localhost:8000/mahasiswa/"+mhsNpm,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(mhsdata)
        }).then((res)=>{
            console.log(res);
            alert('Save Successfully')
            navigate('/');
        }).catch((err)=>{
            console.log(err.message)
        })
    }


    const navigate=useNavigate();
    return (
        <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
            <div className="col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div>
                    <div className="card">
                        <div className="card-title" >
                            <h2>Mahasiswa Edit For Update</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="Form-group">
                                        <label>NPM</label>
                                        <input required value={Npm}  onChange={e=>Npmchange(e.target.value)}className="Form-control" style={{width: '100%'}}></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="Form-group">
                                        <label>Nama</label>
                                        <input required value={Nama} onMouseDown={e=>Valchange(true)} onChange={e=>Namechange(e.target.value)}className="Form-control" style={{width: '100%'}}></input>
                                        {Nama.length===0 && Validation && <span className="text-danger">Masukkan Nama</span>}

                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="Form-group">
                                        <label>Kelas</label>
                                        <input value={Kelas} onChange={e=>Kelaschange (e.target.value)} className="Form-control" style={{width: '100%'}}></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="Form-group">
                                        <label>Semester</label>
                                        <input required value={Semester} onChange={e=>Semesterchange (e.target.value)} className="Form-control" style={{width: '100%'}}></input>
                                    </div>
                                </div>

                            <div className="col-lg-12">
                            <button className="btn btn-success" type="submit">Save</button>
                                <Link to="/"className="btn btn-danger">Back</Link>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
}

export default MhsEdit;