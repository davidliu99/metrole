import json
from pymongo import MongoClient
client = MongoClient("mongodb+srv://david:********@salty-cluster.x2fdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
database = client.metrole
collection = database.games

def lambda_handler(event, context):
    game = event["body"]
    collection.insert_one(game)

    return {
        'statusCode': 200,
        'body': game
    }
