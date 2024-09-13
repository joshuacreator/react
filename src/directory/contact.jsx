import React, { useState } from "react";

const Contact = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        telephone: "",
        isEdit: false,
      });
    
      const [list, setList] = useState([]);
    
      const handleChange = (event) => {
        let { name, value } = event.target;
    
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSave = () => {
        let item = {
          name: formData.name,
          address: formData.address,
          telephone: formData.telephone,
          id: Number(list.length + 1),
        };
    
        setList(list.concat(item));
    
        setFormData({
          name: "",
          address: "",
          telephone: "",
        });
      };
    
      const handleUpdate = () => {
        const newList = list.filter((ls) => formData.id !== ls.id);
    
        setList(newList.concat(formData));
    
        setFormData({
          name: "",
          address: "",
          telephone: "",
          isEdit: false,
        });
      };
    
      const handleDelete = (id) => {
        const newList = list.filter((ls) => ls.id !== id);
    
        setList(newList);
      };
    
      const handleEdit = (ls) => {
        setFormData({
          ...ls,
          isEdit: true,
        });
      };
    
      return (
        <div className="p-3">
          <div class="container mt-10 ">
            <div class="card">
              <div className="card-body ">
                <div className="row ">
                  <div className="col-md-12">
                    <h4>Add New Contact</h4>
    
                    <form className="border border-2 border-primary p-3 mt-5">
                      <div className="form-group mb-3">
                        <label class="mb-2 fw-semibold">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          required=""
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="form-group mb-3">
                        <label class="mb-2 fw-semibold">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          required=""
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="form-group mb-3">
                        <label class="mb-2 fw-semibold">Phone number</label>
                        <input
                          type="number"
                          class="form-control"
                          required=""
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                        />
                      </div>
    
                      <hr />
    
                      <div className="mt-10">
                        <button
                          type="button"
                          class={
                            formData.isEdit ? "btn btn-warning" : "btn btn-primary"
                          }
                          onClick={formData.isEdit ? handleUpdate : handleSave}
                        >
                          {formData.isEdit ? "Update Contact" : "Save Contact"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
    
                <div className="table-wrapper mt-5 mb-2 border border-2 p-3">
                  <h4>Contact List</h4>
    
                  {list.map((ls, index) => (
                    <div className="info-wrapper mb-2">
                      <div>
                        <h5>{ls.name}</h5>
                        <p>
                          {ls.address}: <span>{ls.telephone}</span>
                        </p>
                      </div>
    
                      <div className="btn-group ">
                        <button
                          className="btn btn-warning"
                          onClick={() => handleEdit(ls)}
                        >
                          Edit
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(ls.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}


export default Contact;