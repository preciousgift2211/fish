let appliances = [];

function addAppliance() {

    let name = document.getElementById("appliance").value;
    let watts = Number(document.getElementById("watts").value);
    let hours = Number(document.getElementById("hours").value);

    if (name === "" || watts <= 0 || hours <= 0) {
        alert("Please enter valid appliance information.");
        return;
    }

    let dailyKwh = (watts * hours) / 1000;

    appliances.push({
        name: name,
        watts: watts,
        hours: hours,
        dailyKwh: dailyKwh
    });

    displayAppliances();

    document.getElementById("appliance").value = "";
    document.getElementById("watts").value = "";
    document.getElementById("hours").value = "";
}

function displayAppliances() {

    let list = document.getElementById("applianceList");

    list.innerHTML = "";

    appliances.forEach(function(appliance) {

        let row = `
            <tr>
                <td>${appliance.name}</td>
                <td>${appliance.watts} W</td>
                <td>${appliance.hours} hrs</td>
                <td>${appliance.dailyKwh.toFixed(2)} kWh</td>
            </tr>
        `;

        list.innerHTML += row;
    });
}

function calculateCost() {

    let rate = Number(document.getElementById("rate").value);

    let dailyConsumption = 0;

    appliances.forEach(function(appliance) {
        dailyConsumption += appliance.dailyKwh;
    });

    let monthlyConsumption = dailyConsumption * 30;

    let dailyCost = dailyConsumption * rate;

    let monthlyCost = monthlyConsumption * rate;

    document.getElementById("daily").textContent =
        dailyConsumption.toFixed(2);

    document.getElementById("monthly").textContent =
        monthlyConsumption.toFixed(2);

    document.getElementById("dailyCost").textContent =
        dailyCost.toFixed(2);

    document.getElementById("monthlyCost").textContent =
        monthlyCost.toFixed(2);
}
