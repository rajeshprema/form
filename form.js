 form = document.querySelector('form')
 
form.addEventListener('submit', (e) => {
    e.preventDefault()
 
    var first = document.querySelector('[class= "First Name"]')

    var last = document.querySelector('[ class = "last Name"]')
    
    var address = document.querySelector('[ class=  "address"]')
  
    var pincode = document.querySelector('[class = "pincode"]')
    
    var select = document.querySelector('[class= "select"]')
    
    var select = document.querySelector('[class= "select"]')
    
    var conutry = document.querySelector('[class= "conutry"]')
     
    var statu = document.querySelector('[class= "statu"]')
    

    var tr_data = document.createElement('tr')
    

    var first_td = document.createElement('td')
    first_td.innerText = first.value
    tr_data.append(first_td)

    var last_td = document.createElement('td')
    last_td.innerText = last.value
    tr_data.append(last_td)
 
    var address_td = document.createElement('td')
    address_td.innerText = address.value
    tr_data.append(address_td)
    
    var pincode_td = document.createElement('td')
    pincode_td.innerText = pincode.value
    tr_data.append(pincode_td)
    

    var select_td = document.createElement('td')
    select_td.innerText = select.value
    tr_data.append(select_td)

    var select_td = document.createElement('td')
    select_td.innerText = select.value
    tr_data.append(select_td)


    var conutry_td = document.createElement('td')
    conutry_td.innerText = conutry.value
    tr_data.append(conutry_td)

    var statu_td = document.createElement('td')
    statu_td.innerText = statu.value
    tr_data.append(statu_td)



    var body_data = document.querySelector('tbody')
    body_data.append(tr_data)


    first.value = ''
    last.value = ''
    address.value = ''
    select.value = ''
    select.value = ''
    conutry.value = ''
    statu.value = ''

});