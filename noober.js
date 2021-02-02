async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // console.log(json[0][0].passengerDetails.first)
  // console.log(json.length)
  // console.log(json[0][0].passengerDetails)

  let output = document.querySelector('.rides')

  // 🔥 start here: write code to loop through the rides
  // Loop through the rides (not looping through every leg in every ride)

  for(let i=0; i<json.length; i++) {
    let ride = json[i]
    if(ride.length>1){
      levelOfService = 'Noober Pool'  
      output.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side" aria-hidden="true"></i>
          <span>${levelOfService}</span>
        </h1>  
      `)

      for(let j=0; j<json[i].length; j++) {
        passengerName = `${json[i][j].passengerDetails.first} ${json[i][j].passengerDetails.last}`
        passengerPhone = json[i][j].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][j].numberOfPassengers
        passengerPickupAddressLine1 = json[i][j].pickupLocation.address
        passengerPickupAddressLine2 = `${json[i][j].pickupLocation.city}, ${json[i][j].pickupLocation.state} ${json[i][j].pickupLocation.zip}`
        passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
        passengerDropoffAddressLine2 = `${json[i][j].dropoffLocation.city}, ${json[i][j].dropoffLocation.state} ${json[i][j].dropoffLocation.zip}`
      
        output.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers} passengers
                </span>
              </div>
            </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
          </div>
        `)
      }
    }

    else if(json[i][0].purpleRequested){
      levelOfService = 'Noober Purple'  
      output.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side" aria-hidden="true"></i>
          <span>${levelOfService}</span>
        </h1>  
      `)

      for(let j=0; j<json[i].length; j++) {
        passengerName = `${json[i][j].passengerDetails.first} ${json[i][j].passengerDetails.last}`
        passengerPhone = json[i][j].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][j].numberOfPassengers
        passengerPickupAddressLine1 = json[i][j].pickupLocation.address
        passengerPickupAddressLine2 = `${json[i][j].pickupLocation.city}, ${json[i][j].pickupLocation.state} ${json[i][j].pickupLocation.zip}`
        passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
        passengerDropoffAddressLine2 = `${json[i][j].dropoffLocation.city}, ${json[i][j].dropoffLocation.state} ${json[i][j].dropoffLocation.zip}`
      
        output.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-purple-500 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-purple-600 text-white p-2">
                ${passengerNumberOfPassengers} passengers
                </span>
              </div>
            </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
          </div>
        `)
      }
    }

    else if(json[i][0].numberOfPassengers > 3){
      levelOfService = 'Noober XL'  
      output.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side" aria-hidden="true"></i>
          <span>${levelOfService}</span>
        </h1>  
      `)

      for(let j=0; j<json[i].length; j++) {
        passengerName = `${json[i][j].passengerDetails.first} ${json[i][j].passengerDetails.last}`
        passengerPhone = json[i][j].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][j].numberOfPassengers
        passengerPickupAddressLine1 = json[i][j].pickupLocation.address
        passengerPickupAddressLine2 = `${json[i][j].pickupLocation.city}, ${json[i][j].pickupLocation.state} ${json[i][j].pickupLocation.zip}`
        passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
        passengerDropoffAddressLine2 = `${json[i][j].dropoffLocation.city}, ${json[i][j].dropoffLocation.state} ${json[i][j].dropoffLocation.zip}`
      
        output.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers} passengers
                </span>
              </div>
            </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
          </div>
        `)
      }
    }
    
    else{
      levelOfService = 'Noober X'  
      output.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side" aria-hidden="true"></i>
          <span>${levelOfService}</span>
        </h1>  
      `)

      for(let j=0; j<json[i].length; j++) {
        passengerName = `${json[i][j].passengerDetails.first} ${json[i][j].passengerDetails.last}`
        passengerPhone = json[i][j].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][j].numberOfPassengers
        passengerPickupAddressLine1 = json[i][j].pickupLocation.address
        passengerPickupAddressLine2 = `${json[i][j].pickupLocation.city}, ${json[i][j].pickupLocation.state} ${json[i][j].pickupLocation.zip}`
        passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
        passengerDropoffAddressLine2 = `${json[i][j].dropoffLocation.city}, ${json[i][j].dropoffLocation.state} ${json[i][j].dropoffLocation.zip}`
      
        output.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers} passengers
                </span>
              </div>
            </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
          </div>
        `)
      }
    }

  }
    

}


window.addEventListener('DOMContentLoaded', pageLoaded)