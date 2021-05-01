const jobOfferList = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "FullStack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }
];

const jobsContainer = document.querySelector(".container .main .jobs");
const filtersContainer = document.querySelector(".container .main .filter .filter-links");

let filterLinks = [];


window.addEventListener('load',()=>{
    
    filterLinks = [];

    displayJobs(jobOfferList, filterLinks);

})


function displayJobs(list , filter) {
    let listObj = [];

    let arrayList = [];

    if(filter.length!==0){

        list.forEach((obj)=>{
            let arr = [];
            arr.push(obj.role);
            arr.push(obj.level);
            obj.languages.forEach((lang)=>{
                arr.push(lang);
            });
            obj.tools.forEach((lang) => {
                arr.push(lang);
            });
    
            var ceck = filter.every((el)=>{
                return arr.indexOf(el)!==-1;
            });
    
            if(ceck){
                listObj.push(obj);
            }
        })
    }
    else {
        listObj=list;

    } 


    listObj.forEach((item)=>{
        let newJob = item.featured ? 'newjob':'';

        let spanNew = item.new ? '<span class="extra new"><p>new!</p></span>':'';

        let spanFeatured = item.featured ? '<span class="extra featured"><p>featured</p></span>':'';

        let btns = displayButtons(item);

        let str = `
        <div class="job ${newJob}">
            <div class="job-status">
                <div class="job-status-img">
                    <img src="${item.logo}" alt="">
                </div>
                <div class="job-status-info">
                    <div class="job-status-info-head">
                        <h5><a href="">${item.company}</a></h5>
                        ${spanNew}
                        ${spanFeatured}                    
                    </div>
                    <div class="job-status-info-middle">
                        <a href="">${item.position}</a>
                    </div>
                    <div class="job-status-info-foot">
                        <ul>
                            <li>${item.postedAt}</li>
                            <li><span class="point"></span></li>
                            <li>${item.contract}</li>
                            <li><span class="point"></span></li>
                            <li>${item.location}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <hr>
            
            <div class="job-links">
                ${btns}   
            </div>
        </div>
        `;

        arrayList.push(str);
    })

    jobsContainer.innerHTML = arrayList.join('');

    const  filters = document.querySelectorAll(".container .main .jobs .job .job-links .job-link");

    filterDisplay(filters);

    checkFilter(filterLinks);

}


function displayButtons(item) {
    let list = [];

    list.push(`<button class="job-link">${item.role}</button>`);
    list.push(`<button class="job-link">${item.level}</button>`);

    item.languages.forEach((lang)=>{
        list.push(`<button class="job-link">${lang}</button>`);
    })

    item.tools.forEach((tool) => {
        list.push(`<button class="job-link">${tool}</button>`);
    })

    return list.join('');
}

function filterDisplay(filt) {
    let list = [];

    filt.forEach((ft)=>{
        checkFilter(filterLinks)
        ft.addEventListener('click', ()=>{
            if(!filterLinks.includes(ft.innerHTML)){
                filterLinks.push(ft.innerHTML);
            }
            addBtnFilter(filterLinks);
            displayJobs(jobOfferList, filterLinks);
        })
    })

    const filterTags = filtersContainer.querySelectorAll(".filter-link");

    filterTagFilter(filterTags);
}

function addBtnFilter(flt) {
    let list = [];
    
    flt.forEach((btn)=>{
        var str = `  
        <div class="filter-link">
            <span>
            <p>${btn}</p>
            </span>
            <button><img src="images/icon-remove.svg" alt=""></button>
        </div> `;

        list.push(str);
    })

    filtersContainer.innerHTML = list.join('');
}

function filterTagFilter(flt) {

    flt.forEach((ft)=>{
        ft.querySelector("button").addEventListener('click',()=>{
            let str = ft.querySelector("span p").innerHTML;
            filterLinks.splice(filterLinks.indexOf(str),1);
            addBtnFilter(filterLinks);
            checkFilter(filterLinks);
            displayJobs(jobOfferList, filterLinks);
        })
    })

}

function checkFilter(filter) {
    if (filter.length!==0){
        filtersContainer.parentElement.classList.add('open');
    } else {
        filtersContainer.parentElement.classList.remove('open');
    }
}


const clearClick = document.querySelector(".container .main .filter .filter-clear");

clearClick.addEventListener('click', ()=>{
    filterLinks = [];
    checkFilter(filterLinks);
    displayJobs(jobOfferList, filterLinks);
})