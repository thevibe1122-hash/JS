function updateClock() {
    
    const now = new Date();
    let hours = now.getHours();
    const maridiam = hours >=12 ? `pm`:`am`
    hours = (hours % 12 || 12).toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const secondes = now.getSeconds().toString().padStart(2,0);
    const timeSTR = `${hours}:${minutes}:${secondes}:${maridiam}`;
    document.getElementById(`clock`).textContent= timeSTR
}

updateClock()
setInterval(updateClock,1000)