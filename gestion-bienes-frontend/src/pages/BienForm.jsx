import React, { useState } from 'react';

export default function BienForm({ onBienRegistrado }) {
  const [form, setForm] = useState({
    codigo_interno: '',
    descripcion: '',
    fecha_adquisicion: '',
    valor: '',
    estado: 'activo',
    ubicacion_actual: '',
    responsable_actual: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bienParaEnviar = {
      codigo: form.codigo_interno,
      descripcion: form.descripcion,
      fecha_ingreso: form.fecha_adquisicion,
      valor: parseFloat(form.valor),
      departamento: form.ubicacion_actual,
      responsable: form.responsable_actual,
      estado: form.estado
    };

    try {
      const res = await fetch('http://192.168.68.55:8000/bienes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bienParaEnviar)
      });

      if (!res.ok) throw new Error('Error al registrar el bien');
      const bienGuardado = await res.json();
      alert('✅ Bien registrado con éxito');
      onBienRegistrado(bienGuardado); // 🚀 actualizar listado
      setForm({
        codigo_interno: '',
        descripcion: '',
        fecha_adquisicion: '',
        valor: '',
        estado: 'activo',
        ubicacion_actual: '',
        responsable_actual: ''
      });
    } catch (err) {
      alert('❌ Ocurrió un error al registrar el bien');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Bien</h2>
      {/* todos los input igual que antes */}
      <input name="codigo_interno" placeholder="Código Interno" value={form.codigo_interno} onChange={handleChange} required />
      <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
      <input type="date" name="fecha_adquisicion" value={form.fecha_adquisicion} onChange={handleChange} required />
      <input name="valor" placeholder="Valor" value={form.valor} onChange={handleChange} required />
      <input name="ubicacion_actual" placeholder="Ubicación Actual" value={form.ubicacion_actual} onChange={handleChange} required />
      <input name="responsable_actual" placeholder="Responsable Actual" value={form.responsable_actual} onChange={handleChange} required />
      <select name="estado" value={form.estado} onChange={handleChange}>
        <option value="activo">Activo</option>
        <option value="trasladado">Trasladado</option>
        <option value="dado_de_baja">Dado de baja</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
}
