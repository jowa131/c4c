import scheduler, datetime, pytz, json
today=datetime.datetime.now(pytz.timezone('Asia/Seoul'))
print(json.dumps(scheduler.generate_topics(today), ensure_ascii=False))
