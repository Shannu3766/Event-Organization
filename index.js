function dayone(){
    document.getElementById('changeButton1').style.backgroundColor="rgb(255,7,99)";
    document.getElementById('changeButton2').style.backgroundColor="black";
    document.getElementById('changeButton3').style.backgroundColor="black";
    document.getElementById('changeButton1').addEventListener('click', function() {
    var table = document.getElementById('myTable');
    table.innerHTML = `
    <table class="days-table">
                <caption class="caption">Sunday,11th October</caption>
                <tr class="days-rows" style="height: 100px;">
                    <td class="days-cols" id="table-time">9:30 - 12:30 AM</td>
                    <td class="days-cols"><img src="registration.jpg" alt="" width="100"></td>
                    <td class="days-cols" style="font-size: larger;">Registration</td>
                </tr>
                <tr style="min-height:20px;" class="days-rows">
                    <td class="days-cols" id="table-time">6:30 - 7:00 PM</td>
                    <td class="days-cols"><img src="host.jpg" alt="" width="100"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name"> Gabriel Guevara</span><br>
                        <span id="pro-sub">Introduction about the Program</span><br>
                        <span id="pro-det">Throw myself down teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable.</span>
                    </td>
                </tr>
                <tr class="days-rows">
                    <td class="days-cols" id="table-time">7:00 - 8:00 PM</td>
                    <td class="days-cols"><img src="danceanddrill.jpg" alt="" width="110"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name"> Dance & Drill</span><br>
                        <span id="pro-sub">Performance by dance & drill Team</span><br>
                        <span id="pro-det">Throw myself down teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable.</span>
                    </td>
                </tr>
                <tr class="days-rows" style="height: 100px;">
                    <td class="days-cols" id="table-time">8:00 - 9:30 PM</td>
                    <td class="days-cols"><img src="dinner.jpg" alt="" width="100"></td>
                    <td id="info" class="days-cols">
                        <span style="font-size: larger;">Dinner</span><br>
                        <span id="pro-det">Five star buffet for everybody.</span>
                    </td>
                </tr>
                <tr class="days-rows">
                    <td class="days-cols" id="table-time">10:00 - 1:00 AM</td>
                    <td class="days-cols"><img src="sid sri ram.jpg" alt="" width="90"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name">Sid Sri Ram</span><br>
                        <span id="pro-sub">Indian Playback Singer</span><br>
                        <span id="pro-det">He is an R&B songwriter and has been working in the Tamil ,Telugu, Kannada, Malayalam, Hindi, Marathi and English music industry.</span>
                    </td>
                </tr>
            </table>
    `;
});}
function dayTwo(){
    document.getElementById('changeButton2').style.backgroundColor="rgb(255,7,99)";
    document.getElementById('changeButton1').style.backgroundColor="black";
    document.getElementById('changeButton3').style.backgroundColor="black";
    document.getElementById('changeButton2').addEventListener('click', function() {
    // Replace the table's contents with new data
    var table = document.getElementById('myTable');
    table.innerHTML = `
    <table class="days-table">
                <caption class="caption">Sunday,12th October</caption>
                <tr class="days-rows" style="height: 100px;">
                    <td class="days-cols" id="table-time">5:00 - 6:00 PM</td>
                    <td class="days-cols"><img src="registration.jpg" alt="" width="100"></td>
                    <td class="days-cols" style="font-size: larger;">Registration</td>
                </tr>
                <tr style="min-height:20px;" class="days-rows">
                    <td class="days-cols" id="table-time">6:00 - 8:00 PM</td>
                    <td class="days-cols"><img src="dancersdivine.jpg" alt="" width=110"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name">Dancers Divine</span><br>
                        <span id="pro-sub">Performance by Team Dancers Divine</span><br>
                        <span id="pro-det">This team won the title of Dhee 10 Program .</span>
                    </td>
                </tr>
                <tr class="days-rows">
                    <td class="days-cols" id="table-time">8:00 - 9:30 PM</td>
                    <td class="days-cols"><img src="dinner.jpg" alt="" width="100"></td>
                    <td id="info" class="days-cols">
                        <span style="font-size: larger;">Dinner</span><br>
                        <span id="pro-det">Five star buffet for everybody.</span>
                    </td>
                </tr>
                <tr class="days-rows" style="height: 100px;">
                    <td class="days-cols" id="table-time">10:00 - 11:00 PM</td>
                    <td class="days-cols"><img src="revanth.jpg" alt="" width=125"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name">L.V.Revanth</span><br>
                        <span id="pro-sub">Indian Playback Singer</span><br>
                        <span id="pro-det">Known for his songs in Telugu language. He also won Rock Star, Spicy Singer on Maa TV and Superstar of the South.</span>
                    </td>
                </tr>
                <tr class="days-rows">
                    <td class="days-cols" id="table-time">11:00 - 1:00 AM</td>
                    <td class="days-cols"><img src="arjit singh.jpg" alt="" width="90"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name">Arjit Singh</span><br>
                        <span id="pro-sub">Indain Playback Singer</span><br>
                        <span id="pro-det">The recipient of several accolades including a National Film Award and seven Filmfare Awards, he has recorded songs in several Indian languages.</span>
                    </td>
                </tr>
            </table>
    `;
});}
function dayThree(){
    document.getElementById('changeButton3').style.backgroundColor="rgb(255,7,99)";
    document.getElementById('changeButton2').style.backgroundColor="black";
    document.getElementById('changeButton1').style.backgroundColor="black";
document.getElementById('changeButton3').addEventListener('click', function() {
    // Replace the table's contents with new data
    var table = document.getElementById('myTable');
    table.innerHTML = `
    <table class="days-table">
                <caption class="caption">Sunday,13th October</caption>
                <tr class="days-rows" style="height: 100px;">
                    <td class="days-cols" id="table-time">4:00 - 5:00 PM</td>
                    <td class="days-cols"><img src="registration.jpg" alt="" width="100"></td>
                    <td class="days-cols" style="font-size: larger;">Registration</td>
                </tr>
                <tr style="min-height:20px;" class="days-rows">
                    <td class="days-cols" id="table-time">5:00 - 7:00 PM</td>
                    <td class="days-cols"> <img src="mj-5.jpg" width="100"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name"> MJ-5 </span><br>
                        <span id="pro-sub">Performance by Team MJ-5 </span><br>
                        <span id="pro-det">MJ5, popularly known as India's own Moonwalkers are a band of 5 member crew who participated and won the inaugural season of Star Plus's Dance.</span>
                    </td>
                </tr>
                <tr class="days-rows">
                    <td class="days-cols" id="table-time">7:00 - 8:30 PM</td>
                    <td class="days-cols"><img src="dinner.jpg" alt="" width="100"></td>
                    <td id="info" class="days-cols">
                        <span style="font-size: larger;">Dinner</span><br>
                        <span id="pro-det">Five star buffet for everybody.</span>
                    </td>
                </tr>
                <tr class="days-rows" style="height: 100px;">
                    <td class="days-cols" id="table-time">9:00 - 11:00 PM</td>
                    <td class="days-cols"><img src="jonita (1).jpg" width="100"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name">Jonita Gnadhi</span><br>
                        <span id="pro-sub"> Canadian Playback Singer of Indian descent.</span><br>
                        <span id="pro-det"> She has recorded songs predominantly in Hindi and Tamil languages with few in Punjabi, Telugu, Marathi, Gujarati, Bengali, Kannada and Malayalam languages.</span>
                    </td>
                </tr>
                <tr class="days-rows">
                    <td class="days-cols" id="table-time">11:00 PM - Late</td>
                    <td class="days-cols"><img src="anirudh.jpg" width="100"></td>
                    <td id="info" class="days-cols">
                        <span id="pro-name"> Anirudh Ravichandran </span><br>
                        <span id="pro-sub">Indian Playback Singer</span><br>
                        <span id="pro-det">Heis an Indian music composer, music producer, singer who works in the Indian film industry, primarily in Tamil films. He has also composed music for various Telugu films.</span>
                    </td>
                </tr>
            </table>
    `;
});}
function updateCountdown() {
    const targetDate = new Date("2025-10-11T00:00:00");
    const now = new Date();
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();