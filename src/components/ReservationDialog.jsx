"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export default function ReservationDialog({ isOpen, onClose, date, court, time, price = "$20.000" }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Datos de reserva:", {
      ...formData,
      fecha: date,
      cancha: court,
      hora: time,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border border-gray-700 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-blue-300 mb-4">Reserva tu turno</DialogTitle>
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="bg-gray-700 rounded-lg px-4 py-3 text-center">
              <div className="text-sm text-blue-400 font-medium">Fecha</div>
              <div className="text-gray-200">{format(date, "d 'de' MMMM", { locale: es })}</div>
            </div>
            <div className="bg-gray-700 rounded-lg px-4 py-3 text-center">
              <div className="text-sm text-blue-400 font-medium">Cancha</div>
              <div className="text-gray-200">Cancha {court}</div>
            </div>
            <div className="bg-gray-700 rounded-lg px-4 py-3 text-center">
              <div className="text-sm text-blue-400 font-medium">Horario</div>
              <div className="text-gray-200">{time} hs</div>
            </div>
            <div className="bg-gray-700 rounded-lg px-4 py-3 text-center">
              <div className="text-sm text-blue-400 font-medium">Precio</div>
              <div className="text-gray-200">{price}</div>
            </div>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                Nombre
              </label>
              <Input
                id="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-300 mb-1">
                Apellido
              </label>
              <Input
                id="apellido"
                value={formData.apellido}
                onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                className="bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="celular" className="block text-sm font-medium text-gray-300 mb-1">
                Número de celular
              </label>
              <Input
                id="celular"
                type="tel"
                value={formData.celular}
                onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                className="bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Confirmar Reserva
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
