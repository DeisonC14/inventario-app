import { helpHttp } from "helpers/helpHttp";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { TYPES } from "actions/genericAction";
import {
  genericReducer,
  genericInitialState,
} from "../reducers/genericReducer";
import NotificationContext from "context/NotificationContext";
import LoadingContext from "context/LoadingContext";
import { useNavigate } from "react-router";
import ProveedorContext from "./ProveedorContext";

const CompraContext = createContext();

const CompraProvider = ({ children }) => {
  const [toDetail, setToDetail] = useState();
  const [toUpdate, setToUpdate] = useState();
  const [detail, setDetail] = useState({});
  const [module, setModule] = useState();
  const [proveedores, setProveedores] = useState([]);

  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;

  const { setMessage, setStatus, setType } = useContext(NotificationContext);
  const { setLoading } = useContext(LoadingContext);

  const [state, dispatch] = useReducer(genericReducer, genericInitialState);
  const { db } = state;

  let api = helpHttp();
  let url = REACT_APP_API_URL + "compra";

  useEffect(() => {
    fetchData();
    fetchDataProveedores();
  }, []);

  useEffect(() => {
    if (toUpdate && toUpdate != 0) {
      fetchDataDetail();
    }
  }, [toUpdate]);

  const fetchData = () => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.READ_ALL_DATA, payload: res.data });
      } else {
        dispatch({ type: TYPES.NO_DATA });
      }
      setLoading(false);
    });
  };

  const fetchDataDetail = () => {
    setLoading(true);
    url = url + "/" + toUpdate;
    api.get(url).then((res) => {
      res.data.proveedor = res.data.proveedor.id;
      setDetail(res.data);
      setLoading(false);
    });
  };
  const fetchDataProveedores = () => {
    let urlProveedores = REACT_APP_API_URL + "proveedor";
    api.get(urlProveedores).then((res) => {
      var data = res.data.map(function (obj) {
        obj.text = obj.text || obj.nombre;
        return obj;
      });
      setProveedores(data);
    });
  };

  const saveData = (data) => {
    setLoading(true);
    let endpoint = url;
    let newData = data;
    newData.proveedor = newData.proveedor;
    delete newData.id;
    let options = {
      body: newData,
      headers: { "content-type": "application/json" },
    };
    api.post(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res.data });
        navigate("/admin/compra/");
        setType("success");
        setMessage("El registro fue guardado con exito");
        setStatus(1);
      } else {
      }
      setLoading(false);
    });
  };

  const updateData = (data) => {
    setLoading(true);
    let endpoint = url + "/" + data.id;
    let newData = data;
    newData.proveedor = newData.proveedor;
    delete newData.id;
    let options = {
      body: newData,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        setDetail(res.data);
        dispatch({ type: TYPES.UPDATE_DATA, payload: res.data });
        navigate("/admin/compra");
        setType("success");
        setMessage("El registro fue actualizado correctamente.");
        setStatus(1);
      } else {
      }
      setLoading(false);
    });
  };

  const deleteData = (id) => {
    setLoading(true);
    let endpoint = url + "/" + id;
    let options = {
      body: "",
      headers: { "content-type": "application/json" },
    };
    api.del(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.DELETE_DATA, payload: id });
        setType("success");
        setMessage("El registro fue eliminado correctamente");
        setStatus(1);
      } else {
        setType("danger");
        setMessage(res.message.message);
        setStatus(1);
      }
      setLoading(false);
    });
  };

  const data = {
    db,
    detail,
    setToDetail,
    setToUpdate,
    updateData,
    saveData,
    deleteData,
    module,
    setModule,
    setDetail,
    proveedores,
  };

  return (
    <CompraContext.Provider value={data}>{children}</CompraContext.Provider>
  );
};

export { CompraProvider };
export default CompraContext;
