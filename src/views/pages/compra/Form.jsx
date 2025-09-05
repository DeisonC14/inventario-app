import React, { useContext, useEffect, useState, useRef } from "react";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col } from "reactstrap";
  
import { Link, useParams } from "react-router-dom";
import CompraContext from "context/CompraContext";
import CompraFormValidate from "../../../services/CompraForm";
import { useForm } from "hooks/useForm";
import Header from "components/Headers/Header";

const initialForm = {
    nombre: "",
    descripcion: "",
    categoria: "",
    cantidad: "",
    estado: "",
};

const Formulario = ( ) => {

    const { 
        detail:data, updateData, saveData, setModule, module, setToDetail,setDetail, 
        setToUpdate, proveedores
    } = useContext(CompraContext);

    const {
        validateInit,
        validate,
        form,
        errors,
        setValidateInit,
        setValidate,
        setForm,
        setErrors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, CompraFormValidate.validationsForm);

    const { id } = useParams();

    useEffect(() => {
        if(id){
            setToDetail(id);
            setToUpdate(id);
            setModule("actualizar");
        }else{
            setModule("agregar");
        }
    },[]);

    useEffect(() => {
        setForm(data);
        setErrors(initialForm);
    },[data]);
    
    const handleUpdate = (e) => {
        e.preventDefault();
        let valid = handleSubmit(e);
        if(valid){
            updateData(form);
        }
    }

    const handleSave = (e) => {
        e.preventDefault();
        let valid = handleSubmit(e);
        if(valid){
            saveData(form);
        }
    }

    return (
      <>
        <Header />
            <Container className="mt--7" fluid>
              <Row>
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="">
                      <div className="align-items-center row">
                        <div className="col-11">
                          <h3 className="mb-0">{module?.toUpperCase()} COMPRA</h3>
                          <p className="text-sm mb-0">
                            Formulario de gestion de compras
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <div className="pl-lg-4">
                            <Row>
                                <Col lg="12">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-fecha"
                                        >
                                        Fecha <span className="text-danger">*</span>
                                        </label>
                                        <Input
                                        className="form-control"
                                        id="input-fecha"
                                        placeholder=""
                                        type="date"
                                        name="fecha"
                                        required="required"
                                        invalid={errors.fecha !== ""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={data.fecha}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.fecha}
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col lg="12">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-valor"
                                        >
                                        Valor <span className="text-danger">*</span>
                                        </label>
                                        <Input
                                        className="form-control"
                                        id="input-valor"
                                        placeholder=""
                                        type="text"
                                        name="valor"
                                        required="required"
                                        invalid={errors.valor !== ""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={data.valor}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.valor}
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col lg="12">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-proveedor"
                                        >
                                        Proveedor <span className="text-danger">*</span>
                                        </label>
                                        <Input
                                        className="form-control"
                                        id="input-proveedor"
                                        type="select"
                                        name="proveedor"
                                        value={form.proveedor}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={errors.proveedor !==""}
                                        >
                                        <option value="" hidden></option>
                                        {proveedores.map(item =>  (                                        
                                        
                                        <option key={item.id} value={item.id}>
                                            {item.text}
                                        </option>
                                        ))};
                                        </Input>
                                        <div className="invalid-feedback">
                                            {errors.proveedor}
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col lg="12">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-detalle"
                                        >
                                        Detalle <span className="text-danger">*</span>
                                        </label>
                                        <Input
                                        className="form-control"
                                        id="input-detalle"
                                        placeholder=""
                                        type="text"
                                        name="detalle"
                                        required="required"
                                        invalid={errors.detalle !== ""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={data.detalle}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.detalle}
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col lg="12">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-estado"
                                        >
                                        Estado <span className="text-danger">*</span>
                                        </label>
                                        <Input
                                        className="form-control"
                                        id="input-estado"
                                        placeholder=""
                                        type="text"
                                        name="estado"
                                        required="required"
                                        invalid={errors.estado !== ""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={data.estado}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.estado}
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="col justify-content-end">
                                {module == "actualizar" ? (
                                    <Button
                                        color="primary"
                                        href=""
                                        onClick={handleUpdate}
                                        >
                                        Actualizar
                                    </Button>
                                ) : (
                                    <Button
                                        color="primary"
                                        href=""
                                        onClick={handleSave}
                                        >
                                        Guardar 
                                    </Button>
                                )}
                                <Link
                                    className="btn btn-danger"
                                    color="default"
                                    to={"/admin/compra"}
                                    >
                                    Cancelar
                                </Link>
                            </Row>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
                </div>
            </Row>
        </Container>
      </>
    );
  };
  
  export default Formulario;