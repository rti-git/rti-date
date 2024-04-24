require "rubygems"
require "sinatra"
require "mail"
require "sinatra/cross_origin"

set :port, 4567


require 'rest-client'

def send_email(name, email, mesg)
  api_key = '440f07d422a36a6d79a9dc87a9c06755-2175ccc2-95b51a25'
  domain = 'sandbox442bd331d9a74a55ac87f68a5a6d561d.mailgun.org'
  sender = 'ej980@rti.org.tw'
  recipient = 'ej980@rti.org.tw'

  RestClient.post "https://api:440f07d422a36a6d79a9dc87a9c06755-2175ccc2-95b51a25"\
    "@api.mailgun.net/v3/sandbox442bd331d9a74a55ac87f68a5a6d561d.mailgun.org/messages",
    :from => "#{name} <#{sender}>",
    :to => "#{recipient}",
    :subject => '表單',
    :text => "Name: #{name}\nEmail: #{email}\nMessage: #{mesg}"
end

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

options '/submit' do
  response.headers['Access-Control-Allow-Methods'] = 'POST'
  response.headers['Access-Control-Allow-Headers'] = '*'
  204 # No Content
end

post '/submit' do
  data = JSON.parse(request.body.read)

  name = data['name']
  email = data['email']
  mesg = data['mesg']

  Mail.deliver do
    from 'mike9801215@gmail.com'
    to 'mike9801215@gmail.com'
    subject '表單'
    body "Name: #{name}\nEmail: #{email}\nMessage: #{mesg}"
  end
  '成功送出'
end


