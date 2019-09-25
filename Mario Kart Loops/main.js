// Checks for user input
document.getElementById('oneItemBtn').addEventListener('click', generateItem);
document.getElementById('fiveItemBtn').addEventListener('click', generateFiveItems);
document.getElementById('tenBulletBtn').addEventListener('click', tenBullets);
document.getElementById('customBtn').addEventListener('click', generateManyItems);


function generateItem() {
    // Gathers necessary information to generate item
    let racerPosition = document.getElementById('racerPosition').value;
    let randNum = Math.random();
    //Updates item count
    let totalItems = Number(document.getElementById('totalItems').innerHTML);
    //Racer positions 1-6
    if(racerPosition<=6 && racerPosition>=1){
        if(randNum<=0.01) {
            document.getElementById('currentItem').innerHTML = 'Bullet Bill';
        } else if(randNum>0.01 && randNum<=0.05){
            document.getElementById('currentItem').innerHTML = 'Golden Mushroom';
        } else if(randNum>0.05 && randNum<=0.20){
            document.getElementById('currentItem').innerHTML = 'Star';
        } else if(randNum>0.20 && randNum<=0.55){
            document.getElementById('currentItem').innerHTML = 'Green Shell';
        } else if(randNum>0.55){
            document.getElementById('currentItem').innerHTML = 'Banana';
        }
        totalItems +=1;
        document.getElementById('totalItems').innerHTML = totalItems;
    //Racer positions 7-12
    } else if (racerPosition<=12 && racerPosition>6){
        if(randNum<=0.05) {
            document.getElementById('currentItem').innerHTML = 'Banana';
        } else if(randNum>0.05 && randNum<=0.1){
            document.getElementById('currentItem').innerHTML = 'Green Shell';
        } else if(randNum>0.1 && randNum<=0.35){
            document.getElementById('currentItem').innerHTML = 'Star';
        } else if(randNum>0.35 && randNum<=0.7){
            document.getElementById('currentItem').innerHTML = 'Golden Mushroom';
        } else if(randNum>0.7){
            document.getElementById('currentItem').innerHTML = 'Bullet Bill';
        }
        totalItems +=1;
        document.getElementById('totalItems').innerHTML = totalItems;
    }
}

function generateFiveItems() {
    for(let i=0; i<5; i++){
        generateItem();
    }
}

function tenBullets() {
    let bulletCount = 0;
    // Prevents site from creating infinite loop
    let racerPosition = document.getElementById('racerPosition').value
    if(racerPosition<1 || racerPosition>12){
        bulletCount = 10;
    }
    while(bulletCount<10){
        generateItem();
        let item = document.getElementById('currentItem').innerHTML;
        if(item=='Bullet Bill'){
            bulletCount ++;
        }
    }
}

function generateManyItems(){
    let itemAmount = document.getElementById('customItemAmount').value;
    for(let i=0; i<itemAmount; i++){
        generateItem();
    }
}