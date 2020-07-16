console.log('Ready to Go');

//If extension button is presses 
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {

    if (message === 'success') {

        //Removing People May Ask Feature
        var element = document.getElementsByClassName('kno-kp');
        if(element.length){
            element[0].parentNode.removeChild(element[0]);
        }
        

        // var elemen = document.getElementsByClassName('mnr-c');
        // elemen[0].parentNode.removeChild(elemen[0]);

        //Removing unnecessary divs affecting result
        var del = document.getElementsByClassName('dfiEbb');
        if(del.length){
            const len = del.length
            for (let i = 0; i < len; i++) {
                del[0].parentNode.removeChild(del[0]);
            }
        }


        // Result are contained in g class
        let example = document.getElementsByClassName('rc')

        for (let i = 0; i < example.length; i++) {
            var headline = example[i].getElementsByClassName('LC20lb')
            headline[0].innerHTML = i + 1

            // document.getElementsByClassName("fl").onclick = function(){
            //     console.log('i am clicked')
            // };
 
        }
    }

}

