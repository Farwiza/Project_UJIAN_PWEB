import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const MhsCreate = () => {

    const[Npm, Npmchange]=useState("");
    const[Nama, Namechange]=useState("");
    const[Kelas, Kelaschange]=useState("");
    const[Semester, Semesterchange]=useState("");
    const[Active, Activechange]=useState(true);
    const[Validation, Valchange]=useState(false);


    const navigate=useNavigate();

    

    const handlesubmit=(e)=>{
        e.preventDefault();
        const mhsdata={Npm, Nama, Kelas, Semester, Active};
        

        fetch(" http://localhost:8000/mahasiswa",{
            method:"POST",
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
    return (
        <div>

            <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                <div className="col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div>
                            <div className="card" style={{"textAlign":"left"}}>
                                <div className="card-title" >
                                    <h2>Mahasiswa create</h2>
                                </div>
                                <div className="card-body">

                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="Form-group">
                                                <label>NPM</label>
                                                <input required value={Npm}  onChange={e=>Npmchange(e.target.value)} className="Form-control" style={{width: '100%'}} ></input>
                                                {Npm.length===0 && Validation && <span className="text-danger">Anda Harus Memasukkan Npm Anda</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="Form-group">
                                                <label>Nama</label>
                                                <input required value={Nama} onMouseDown={e=>Valchange(true)} onChange={e=>Namechange(e.target.value)}className="Form-control" style={{width: '100%'}}></input>
                                                {Nama.length===0 && Validation && <span className="text-danger">Anda Harus Memasukkan Nama Anda</span>}

                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="Form-group">
                                                <label>Kelas</label>
                                                <input value={Kelas} onChange={e=>Kelaschange (e.target.value)} className="Form-control" style={{width: '100%'}}></input>
                                                {Kelas.length===0 && Validation && <span className="text-danger">Anda Harus Memasukkan Kelas Anda</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="Form-group">
                                                <label>Semester</label>
                                                <input required value={Semester} onChange={e=>Semesterchange (e.target.value)} className="Form-control" style={{width: '100%'}}></input>
                                                {Semester.length===0 && Validation && <span className="text-danger">Anda Harus Memasukkan Semester Anda</span>}
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="Form-check">
                                                <input value={Active} onChange={e=>Activechange (e.target.checked)} type="checkbox" className="Form-check-input m-1"></input>
                                                    <label className="form-check-label">Apakah Anda Mahasiswa Aktif?</label>
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
        </div>
    );
}

export default MhsCreate;