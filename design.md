## Preliminary Design
Preliminary design of fitness program DSL blocks.

## Fitness Program Block Design
* Workout Block
Workout Block represents a whole workout and is comprised of any amount of different exercises.
* Exercise Block
Exercise Block represents a specific exercise that is being performed. Example: Squats, Push-Ups, etc.
* Set Block
Set Block represents the number of sets that an exercise will be performed. Example: The number of loops an exercise will be repeated for, for a number of times.
* Repetition Block
Repetition Block represents the specified amount of times an exercise will be repeated. Example: The number of push-ups done within a single set.
* Rest Block
Rest Block represents the duration that should be taken for rest in between sets or exercises.

## Block Interactions
Blocks can be connected together to be structured into a workout plan.
* Exercise Block Example 1:
Exercise Block("Squats") + Set Block("4")+ Repetition Block("10") + Rest Block("1 minute")
* Exercise Block Example 2:
Workout Block("Monday Workout") +
Exercise Block("Push-Ups") + Set Block("5")+ Repetition Block("20") + Rest Block("2 minutes") +
Exercise Block("Squats") + Set Block("5")+ Repetition Block("20") + Rest Block("2 minutes")

## Further Implementation
* Preset Workout routines that can be implemented
* Drag and drop workout routines
* Customize workout routine
