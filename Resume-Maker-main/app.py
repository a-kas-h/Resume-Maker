from flask import Flask,request,render_template

app = Flask(__name__,static_url_path="/static")

@app.route("/register",methods = ['GET','POST'])
def get_details():
    if request.method=="POST":
        #Personal Information
        name = request.form.get('user_name')
        email = request.form.get('user_email')
        phone = request.form.get('user_phone')
        country = request.form.get('user_country')
        state = request.form.get('user_state')
        linkedin = request.form.get('user_linkedin')
        github = request.form.get('user_github')
        
        #skills
        skills = request.form.getlist('user_skill[]')

        #experience
        jobtitles = request.form.getlist('jobtitles[]')
        companies = request.form.getlist('companies[]')
        tenures = request.form.getlist('tenures[]')
        locations = request.form.getlist('locations[]')
        responsibilities = request.form.getlist('responsibilities[]')
        experiences = []
        for i in range(len(jobtitles)):
            experience = {
                'job_title': jobtitles[i],
                'company': companies[i],
                'tenure': tenures[i],
                'location': locations[i],
                'responsibility': responsibilities[i]
            }
            experiences.append(experience)

        #education
        degrees = request.form.getlist('degrees[]')
        universities = request.form.getlist('universities[]')
        years = request.form.getlist('years[]')
        gpas = request.form.getlist('gpas[]')
        educations = []
        for i in range(len(degrees)):
            education = {
                'degree': degrees[i],
                'university': universities[i],
                'year': years[i],
                'gpa': gpas[i]
            }
            educations.append(education)

        #languages
        languages = request.form.getlist('languages[]')
        proficiency = request.form.getlist('proficiency[]')
        lang = []
        for i in range(len(languages)):
            language = {
                'language': languages[i],
                'proficiency': proficiency[i]
            }
            lang.append(language)
        
        return render_template("output.html",name=name,email=email,phone=phone,country=country,state=state,linkedin=linkedin,github=github,skills=skills,experiences=experiences,educations=educations,languages=lang)
    return render_template("index.html")




if __name__=="__main__":
    app.run(debug=True)