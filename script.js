body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 20px;
  color: #333;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  color: #2c3e50;
}

.anio {
  margin-bottom: 30px;
}

.anio h2 {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  margin: 0 0 15px 0;
  border-radius: 5px;
}

.materia {
  display: inline-block;
  background-color: #ffffff;
  border: 2px solid #2c3e50;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 200px;
  text-align: center;
  font-weight: bold;
}

.materia:hover {
  background-color: #d0e6f7;
}

.modal {
  display: none;
  position: fixed;
  z-index: 100;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  position: relative;
}

#close-btn {
  position: absolute;
  top: 10px; right: 15px;
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

