import { useState } from 'react'
import './App.css'
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function App() {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [tipoPago, setTipoPago] = useState("pago");

  return (
    <div className='p-5'>
      <div className='row'>
        <div className="col-sm-12 col-md-3">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Registrar</h5>
              <hr />
              <div class="form-check form-check-inline">
                <input onChange={(e) => setTipoPago(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="pago" />
                <label class="form-check-label" for="inlineRadio1">Pago</label>
              </div>
              <div class="form-check form-check-inline">
                <input onChange={(e) => setTipoPago(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="vale" />
                <label class="form-check-label" for="inlineRadio2">Vale</label>
              </div>
              <div class="form-check form-check-inline">
                <input onChange={(e) => setTipoPago(e.target.value)} class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="gasto" />
                <label class="form-check-label" for="inlineRadio3">Gasto</label>
              </div>
              <hr />

              {tipoPago && tipoPago == "pago" ? <PagoForm /> : ''}
              {tipoPago && tipoPago == "vale" ? <ValeForm /> : ''}
              {tipoPago && tipoPago == "gasto" ? <GastoForm /> : ''}

              <div class="d-grid gap-2">
                <button class="btn btn-dark" type="button">Agregar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-9">
          <div class="card">
            <div class="card-header">
              <div className="row">
                <div className="col">
                  Datos
                </div>
                <div className="col">
                  <div className="float-end">
                    <span>
                      <b>Buscar por fecha: </b>
                    </span>
                    <DateRangePicker onChange={onChange} value={value} />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Profesional / Descripción</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Detalle</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      1 <br />
                      <small>
                        <a href="#" className='text-danger'>Eliminar</a>
                      </small>
                    </th>
                    <td>Mark</td>
                    <td>09/01/2024</td>
                    <td>
                      <b>Tratamiento: </b> Masaje <br />
                      <b>Cliente: </b> Cleibert Mora (098 000 1111) <br />
                      <b>Nota: </b> Okok...
                    </td>
                    <td className='text-center bg-success-subtle'>
                      <small>
                        <b>Pago</b>
                      </small>
                    </td>
                    <td className='bg-success-subtle'>$15.50</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>09/01/2024</td>
                    <td>
                      <b>Nota: </b> Okok...
                    </td>
                    <td className='text-center bg-warning-subtle'>
                      <small>
                        <b>Vale</b>
                      </small>
                    </td>
                    <td className='bg-warning-subtle'>$5.50</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Limpieza</td>
                    <td>09/01/2024</td>
                    <td>
                      <b>Nota: </b> Okok...
                    </td>
                    <td className='text-center bg-danger-subtle'>
                      <small>
                        <b>Gasto</b>
                      </small>
                    </td>
                    <td className='bg-danger-subtle'>$5.00</td>
                  </tr>
                  <tr>
                    <td colSpan="4"></td>
                    <td><b className='fs-3'>Total: </b></td>
                    <td className='bg-info-subtle fs-4'><b>$5.00</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


function PagoForm() {
  return (
    <>
      <div class="mb-3">
        <label
          for="amount"
          class="form-label">
          <b>Profesional</b>
        </label>
        <Select id="profesional" options={options} placeholder="seleccionar..." />
      </div>
      <div class="mb-3">
        <label
          for="amount"
          class="form-label">
          <b>Tratamiento</b>
        </label>
        <Select id="tratamiento" options={options} placeholder="seleccionar..." />
      </div>
      <div class="mb-3">
        <label
          for="cliente"
          class="form-label">
          <b>Cliente</b>
        </label>
        <Select id="cliente" options={options} placeholder="seleccionar..." />
      </div>
      <div class="mb-3">
        <label
          for="amount"
          class="form-label">
          <b>Teléfono</b>
        </label>
        <input
          type="number"
          placeholder='090 000 00 00'
          class="form-control"
          id="amount"
          aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label
          for="amount"
          class="form-label">
          <b>Valor tratamiento</b>
        </label>
        <input
          type="number"
          step=".0"
          placeholder='0.00'
          class="form-control"
          id="amount"
          aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label
          for="date"
          class="form-label">
          <b>Fecha: </b>
        </label>
        <input
          type="date"
          class="form-control"
          id="date"
          aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label
          for="date"
          class="form-label">
          <b>Nota: </b>
        </label>
        <textarea
          rows="3"
          class="form-control"
          placeholder='Opcional'
          id="date"
          aria-describedby="emailHelp" />
      </div>
    </>
  );
}

function ValeForm() {
  return (
    <>
      <div class="mb-3">
        <label
          for="amount"
          class="form-label">
          <b>Profesional</b>
        </label>
        <Select id="profesional" options={options} placeholder="seleccionar..." />
      </div>
      <div class="mb-3">
        <label
          for="amount"
          class="form-label">
          <b>Valor Vale</b>
        </label>
        <input
          type="number"
          step=".0"
          placeholder='0.00'
          class="form-control"
          id="amount"
          aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label
          for="date"
          class="form-label">
          <b>Nota: </b>
        </label>
        <textarea
          rows="3"
          class="form-control"
          placeholder='Opcional'
          id="date"
          aria-describedby="emailHelp" />
      </div>
    </>
  )
}

function GastoForm() {
  return (
    <>
      <div class="mb-3">
        <label
          for="gasto"
          class="form-label">
          <b>Descripción</b>
        </label>
        <input
          type="text"
          placeholder='Ejem. Limpieza'
          class="form-control"
          id="gasto"
          aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label
          for="amount"
          class="form-label">
          <b>Valor Gasto</b>
        </label>
        <input
          type="number"
          step=".0"
          placeholder='0.00'
          class="form-control"
          id="amount"
          aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label
          for="date"
          class="form-label">
          <b>Nota: </b>
        </label>
        <textarea
          rows="3"
          class="form-control"
          placeholder='Opcional'
          id="date"
          aria-describedby="emailHelp" />
      </div>
    </>
  )
}