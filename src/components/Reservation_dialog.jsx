"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import styles from "./Reservation_dialog.module.css"

export default function ReservationDialog({ isOpen, onClose, date, court, time, price = "$20.000" }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    let timer
    if (showConfirmation) {
      timer = setTimeout(() => {
        setShowConfirmation(false)
        onClose()
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [showConfirmation, onClose])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Datos de reserva:", {
      ...formData,
      fecha: date,
      cancha: court,
      hora: time,
    })
    setShowConfirmation(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        {showConfirmation ? (
          <div className={styles.confirmationModal}>
            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2>Turno solicitado</h2>
            <p>Su reserva esta a la espera de confirmacion. Espere su mensaje de whatsapp de confirmacion de turno.</p>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Reserva tu turno</h2>
              <button className={styles.closeButton} onClick={onClose}>
                ×
              </button>
            </div>

            <div className={styles.content}>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <small>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 2V5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2V5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 9H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Fecha
                  </small>
                  <div>{format(date, "d 'de' MMMM", { locale: es })}</div>
                </div>
                <div className={styles.infoItem}>
                  <small>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 10H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 14H7.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 14H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Cancha
                  </small>
                  <div>Cancha {court}</div>
                </div>
                <div className={styles.infoItem}>
                  <small>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Horario
                  </small>
                  <div>{time} hs</div>
                </div>
                <div className={styles.infoItem}>
                  <small>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 1V23"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Precio
                  </small>
                  <div>{price}</div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className={styles.input}
                    placeholder="Ingrese su nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="apellido">
                    Apellido
                  </label>
                  <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    className={styles.input}
                    placeholder="Ingrese su apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="celular">
                    Número de celular
                  </label>
                  <input
                    id="celular"
                    name="celular"
                    type="tel"
                    className={styles.input}
                    placeholder="Ingrese su número"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

